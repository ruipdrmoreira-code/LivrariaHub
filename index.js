// -------------------------DARK/LIGHTMODE---------------------------
const html = document.documentElement;
const dark = document.querySelector('#temaDark');
const light = document.querySelector('#temaLight');

async function mudarTema(t) {
    html.setAttribute('data-bs-theme', t);
}

dark.addEventListener('click', () => mudarTema('dark'));
light.addEventListener('click', () => mudarTema('light'));
// --------------------------------------------------------------------------