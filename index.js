const puppeteer = require('puppeteer');

function normalizarUrl(url) {
  if (!url) return 'Sem link';
  if (url.startsWith('http')) return url;
  return `https://www.wook.pt${url}`;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized'],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
  );

  console.log('Abrindo a Wook...');
  await page.goto('https://www.wook.pt/', { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Tenta aceitar cookies para garantir acesso ao conteúdo completo.
  const botoesCookies = [
    '#onetrust-accept-btn-handler',
    'button[aria-label*="Aceitar"]',
    'button[id*="accept"]',
  ];
  for (const selector of botoesCookies) {
    const botao = await page.$(selector);
    if (botao) {
      await botao.click();
      break;
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 2500));

  const livros = await page.evaluate(() => {
    const resultados = [];

    const toArray = (value) => (Array.isArray(value) ? value : [value]);

    const guardarLivro = (livro) => {
      if (!livro?.titulo) return;
      if (resultados.some((item) => item.titulo === livro.titulo)) return;
      resultados.push(livro);
    };

    const coletarDeJsonLd = () => {
      const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      scripts.forEach((script) => {
        try {
          const data = JSON.parse(script.textContent || '');
          const stack = toArray(data);

          while (stack.length) {
            const item = stack.pop();
            if (!item || typeof item !== 'object') continue;

            if (Array.isArray(item)) {
              stack.push(...item);
              continue;
            }

            if (item['@graph']) stack.push(...toArray(item['@graph']));
            if (item.itemListElement) stack.push(...toArray(item.itemListElement));
            if (item.mainEntity) stack.push(...toArray(item.mainEntity));
            if (item.item) stack.push(...toArray(item.item));

            const tipo = item['@type'];
            const isProduct =
              tipo === 'Product' ||
              (Array.isArray(tipo) && tipo.includes('Product')) ||
              (item.name && (item.offers || item.url));

            if (!isProduct) continue;

            const offers = Array.isArray(item.offers) ? item.offers[0] : item.offers;
            const priceRaw = offers?.price || offers?.lowPrice || null;
            const priceCurrency = offers?.priceCurrency || 'EUR';
            const disponibilidade = offers?.availability || 'Sem info';

            guardarLivro({
              titulo: item.name || 'Sem titulo',
              preco: priceRaw ? `${priceRaw} ${priceCurrency}` : 'Sem preco',
              disponibilidade: String(disponibilidade).split('/').pop() || 'Sem info',
              link: item.url || offers?.url || 'Sem link',
            });
          }
        } catch (_) {
          // ignora JSON inválido
        }
      });
    };

    const coletarDoDom = () => {
      const linksLivro = Array.from(document.querySelectorAll('a[href*="/livro/"]'));

      linksLivro.forEach((link) => {
        const titulo = link.getAttribute('title')?.trim() || link.textContent?.trim();
        if (!titulo || titulo.length < 2) return;

        const card = link.closest('article, li, div');
        const cardText = card?.innerText || '';
        const precoMatch = cardText.match(/(\d+[,.]\d{2})\s*€/);
        const disponibilidade = /esgotado/i.test(cardText) ? 'Esgotado' : 'Disponivel';

        guardarLivro({
          titulo,
          preco: precoMatch ? `${precoMatch[1]} EUR` : 'Sem preco',
          disponibilidade,
          link: link.getAttribute('href') || 'Sem link',
        });
      });
    };

    coletarDeJsonLd();
    if (resultados.length < 5) coletarDoDom();

    return resultados.slice(0, 10);
  });

  const livrosPaginaAtual = livros
    .map((livro) => ({ ...livro, link: normalizarUrl(livro.link) }))
    .filter((livro) => livro.link.includes('/livro/'))
    .slice(0, 10);

  console.log('\n--- Sucesso! ---');
  if (!livrosPaginaAtual.length) {
    console.log('Nao consegui extrair livros da pagina atual da Wook nesta tentativa.');
  } else {
    console.log(`Livros encontrados na pagina atual: ${livrosPaginaAtual.length}`);
    livrosPaginaAtual.forEach((livro, i) => {
      console.log(`${i + 1}. ${livro.titulo} | Preco: ${livro.preco} | Estado: ${livro.disponibilidade}`);
      console.log(`   Link: ${livro.link}`);
    });
  }

  console.log('\nPronto. O navegador vai ficar aberto para navegares normalmente.');
})();