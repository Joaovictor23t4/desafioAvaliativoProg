let ulPendente = document.querySelector("#ulPendentes");
let inputPendente = document.querySelector("#inputPendente");
let botaoAdicionar = document.querySelector("#btnAdicionar");
let listBtnFinish;
let arrayPendentes = [];

function adicionarTarefa() {
    let input = document.querySelector("#inputPendente");
    let li = document.createElement("li");
    li.classList.add("tarefa");
    let index = ulPendente.childElementCount;
    // li.dataset.index = index;
    let buttonConcluir = document.createElement("button");
    buttonConcluir.classList.add("btnFinalizar");
    buttonConcluir.addEventListener("click", (e) => {
        e.preventDefault();
    });
    li.innerHTML = `${input.value} - <button class="btnFinalizar">Finalizar</button>`;
    ulPendente.appendChild(li);
    arrayPendentes.push(input.value);

    // listBtnFinish = document.querySelectorAll(".btnFinalizar");

    // listBtnFinish.forEach((btn, index) => {
    //     console.log(listBtnFinish);
    //     alert(index);
    //     // btn[index].addEventListener("click", finalizarTarefa(index));
    //     console.log(btn[index]);
    // })

    buttonConcluir.addEventListener("click", finalizarTarefa());
}

function limparInput() {
    let input = document.querySelector("#inputPendente");
    input.value = "";
}

function finalizarTarefa(indice) {
    ulPendente.removeChild(ulPendente.children[indice]);
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
