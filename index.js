// -------------------------DARK/LIGHTMODE---------------------------
const html = document.documentElement;
const dark = document.querySelector("#temaDark");
const light = document.querySelector("#temaLight");

async function mudarTema(t) {
  html.setAttribute("data-bs-theme", t);
}

dark.addEventListener("click", () => mudarTema("dark"));
light.addEventListener("click", () => mudarTema("light"));

// ------------------------------Filtro Pesquisa NOME ESCOLAS--------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const campoEscola = document.getElementById("PesquisaEscola");

  const filtrarEscolas = () => {
    const termoBusca = campoEscola.value.toLowerCase().trim();
    const itensParaFiltrar = document.querySelectorAll(".item-livro");

    itensParaFiltrar.forEach((item) => {
    
      const nomeEscolaNoCard = item
        .querySelector(".nome-escola")
        .textContent.toLowerCase();

      if (nomeEscolaNoCard.includes(termoBusca)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  if (campoEscola) {
    campoEscola.addEventListener("input", filtrarEscolas);
  }
});
