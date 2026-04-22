import './bootstrap';
// --------------------------------------BOTAO TEMA----------------------------------
tema.onclick = () => {
  const el = document.documentElement;
  const nvo = el.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  el.setAttribute("data-bs-theme", nvo);
};

render(dds);