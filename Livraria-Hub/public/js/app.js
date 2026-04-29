
document.addEventListener("DOMContentLoaded", () => {

    const bsc = document.getElementById("nmrBusca");
    const btnBsc = document.getElementById("btnBusca");
    const tema = document.getElementById("btnTema");

 
    function filtrar() {
        if (bsc) {
            const txt = bsc.value.toLowerCase();
            console.log("A pesquisar por: " + txt);
            alert("A pesquisar por: " + txt);
        }
    }

    //-----------------------------BARRA DE PESQUISA NAVBAR ----------------------------
    if (btnBsc && bsc) {
        btnBsc.onclick = filtrar;
        
        bsc.onkeydown = (e) => {
            if (e.key === "Enter") filtrar();
        };
    }

    //---------------------------------- BOTAO TEMA-----------------------------
    if (tema) {
        tema.onclick = () => {
            const elemento = document.documentElement;
            const nvo = elemento.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
            elemento.setAttribute("data-bs-theme", nvo);
            console.log("Tema alterado para: " + nvo);
        };
    }
});