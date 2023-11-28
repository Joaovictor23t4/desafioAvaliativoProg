let ulPendente = document.querySelector("#ulPendentes");
let inputPendente = document.querySelector("#inputPendente");
let botaoAdicionar = document.querySelector("#btnAdicionar");
let listBtnFinish;
let arrayPendentes = [];

function adicionarTarefa() {
    let input = document.querySelector("#inputPendente");
    let li = document.createElement("li");
    li.classList.add("tarefa");
    li.innerHTML = `${input.value} - <button class="btnFinalizar" onclick="finalizarTarefa()">Finalizar</button>`;
    ulPendente.appendChild(li);
    arrayPendentes.push(input.value);
    listBtnFinish = document.getElementsByClassName("btnFinalizar");
    console.log(listBtnFinish);
}

function limparInput() {
    let input = document.querySelector("#inputPendente");
    input.value = "";
}

function finalizarTarefa() {
    let liRemove = document.getElementsByClassName("tarefa");
    ulPendente.removeChild(liRemove[this]);
}

botaoAdicionar.addEventListener("click", () => {
    adicionarTarefa();
    limparInput();
});

inputPendente.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        adicionarTarefa();
        limparInput(); 
    }
});