let ulPendente = document.querySelector("#ulPendentes");
let inputPendente = document.querySelector("#inputPendente");
let botaoAdicionar = document.querySelector("#btnAdicionar");
let listBtnFinish;
let arrayPendentes = [];

function adicionarTarefa() {
  let input = document.querySelector("#inputPendente").value;

  if (input !== "") {
    let li = document.createElement("li");
    li.innerHTML = input;
    let buttonConcluir = document.createElement("button");
    buttonConcluir.innerHTML = `Finalizar`;
    buttonConcluir.addEventListener("click", () => {
      finalizarTarefa(li, buttonConcluir);
    });
    ulPendente.appendChild(li);
    li.appendChild(buttonConcluir);
  }
}

function limparInput() {
  let input = document.querySelector("#inputPendente");
  input.value = "";
}

function finalizarTarefa(tarefa, botao) {
    let removerButton = tarefa.removeChild(botao);
    let ulFinalizadas = document.querySelector("#ulFinalizadas");
    let cloneTarefa = tarefa.cloneNode(true);
    ulFinalizadas.appendChild(cloneTarefa);
    tarefa.remove();
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
