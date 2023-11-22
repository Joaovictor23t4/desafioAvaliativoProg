let ulPendente = document.querySelector("#ulPendentes");
let botaoAdicionar = document.querySelector("#btnAdicionar");
let arrayPendentes = [];

function adicionarTarefa() {
    let input = document.querySelector("#inputPendente");
    let li = document.createElement("li");
    li.innerHTML = `${input.value} - <a>Finalizar</a>`;
    ulPendente.appendChild(li);
    arrayPendentes.push(input.value);
}

function limparInput() {
    let input = document.querySelector("#inputPendente");
    input.value = "";
}

botaoAdicionar.addEventListener("click", () => {
    adicionarTarefa();
    limparInput();
});