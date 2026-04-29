const bsc = document.getElementById("nmrBusca");
const btnBsc = document.getElementById("btnBusca");
const tema = document.getElementById("btnTema");

// ------------------------------------BARRA DE PESQUISA DA NAVBAR--------------------------
btnBsc.onclick = filtrar;

bsc.onkeydown = (e) => {
  if (e.key === "Enter") {
    filtrar();
  }
};

// --------------------------------------BOTAO TEMA----------------------------------
tema.onclick = () => {
  const elemento = document.documentElement;
  const nvo = elemento.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  elemento.setAttribute("data-bs-theme", nvo);
};