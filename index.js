// -------------------------DARK/LIGHTMODE---------------------------
const btn = document.querySelector('#alternarTema');
const html = document.documentElement;

btn.addEventListener('click', () => {
  if (html.getAttribute('data-bs-theme') === 'dark') {
    html.setAttribute('data-bs-theme', 'light');
    btn.textContent = 'Dark';
  } else {
    html.setAttribute('data-bs-theme', 'dark');
    btn.textContent = 'Light';
  }
});
// --------------------------------------------------------------------------