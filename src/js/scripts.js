const btnFiltrar = document.querySelector('.btn-filtrar');
const select = document.querySelector('#categoria');
const input = document.querySelector('#preco');
const cartas = document.querySelector('.cartas ');
const li = document.querySelector(".carta");
const frase = document.querySelector(".frase")
const rodape = document.querySelector('.rodape');

btnFiltrar.addEventListener('click', () => {
    let cartasVisiveis = 0;
    const valorSelect = select.value;
    const valorInput = input.value;


    // Seleciona todas as cartas
    const cartasList = document.querySelectorAll('.carta');

    cartasList.forEach((carta) => {

        const valorCategoria = carta.getAttribute('data-categoria');
        const valorPreco = carta.getAttribute('data-preco');

        const resultadoCategoria = valorSelect === "" || valorSelect === valorCategoria;
        const resultadoPreco = valorInput === "" || valorInput === valorPreco || valorInput <= valorPreco

        if (resultadoCategoria && resultadoPreco) {
            carta.style.display = "block";
            cartasVisiveis++;


        } else {
            carta.style.display = "none";

        }

        if (cartasVisiveis > 0) {
            rodape.style.display = "flex";
            frase.style.display = "none";
        } else {
            rodape.style.display = "none";
            frase.style.display = "block";
        }
    });

});

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        btnFiltrar.click();
    }
});



