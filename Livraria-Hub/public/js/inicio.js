const lst = document.getElementById("lstLiv");
const bsc = document.getElementById("nmrBusca");
const btnBsc = document.getElementById("btnBusca");
const selecEditora = document.getElementById("filtroEditora");
const selecAno = document.getElementById("filtroAno");
const selecTipo = document.getElementById("filtroTipo");
const selecDiscip = document.getElementById("filtroDisciplina");
const tema = document.getElementById("btnTema");
const btnLimpar = document.getElementById("btnLimpar");
const contadorLivros = document.getElementById("contadorLivros");

const dds = [];

function render(arr) {
  if (arr.length === 0) {
    lst.innerHTML = `<div class="col-12 sem-resultados"><i class="bi bi-search" style="font-size:2rem;"></i><br>Nenhum livro encontrado com esses filtros.</div>`;
    contadorLivros.textContent = "0 livros encontrados";
    return;
  }

  contadorLivros.textContent = `${arr.length} livro${arr.length !== 1 ? "s" : ""} encontrado${arr.length !== 1 ? "s" : ""}`;

  lst.innerHTML = arr.map(l => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card card-liv">
        <img src="${l.img || "https://via.placeholder.com/300x180/2a2260/9988ff?text=Sem+Capa"}" class="img-cap" alt="${l.tit}">
        <div class="card-body">
          <h5 class="card-title">${l.tit}</h5>
          <span class="tag-loc">${l.ano ? l.ano + "º Ano" : "Geral"}</span>
          <p class="preco-liv">${parseFloat(l.prc).toFixed(2)}€</p>
        </div>
      </div>
    </div>
  `).join("");
}

function filtrar() {
  const txt = bsc.value.toLowerCase();
  const editora = selecEditora.value;
  const ano = selecAno.value;
  const tipo = selecTipo.value;
  const discip = selecDiscip.value;

  const res = dds.filter(l => {
    return (
      l.tit.toLowerCase().includes(txt) &&
      (editora === "" || l.editora === editora) &&
      (ano === "" || l.ano === ano) &&
      (tipo === "" || l.tipo === tipo) &&
      (discip === "" || l.discip === discip)
    );
  });

  render(res);
}

function limparFiltros() {
  bsc.value = "";
  selecEditora.value = "";
  selecAno.value = "";
  selecTipo.value = "";
  selecDiscip.value = "";
  filtrar();
}

btnBsc.onclick = filtrar;

bsc.onkeydown = (e) => {
  if (e.key === "Enter") {
    filtrar();
  }
};

selecEditora.onchange = filtrar;
selecAno.onchange = filtrar;
selecTipo.onchange = filtrar;
selecDiscip.onchange = filtrar;
btnLimpar.onclick = limparFiltros;

tema.onclick = () => {
  const elemento = document.documentElement;
  const nvo = elemento.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  elemento.setAttribute("data-bs-theme", nvo);
};

render(dds);
