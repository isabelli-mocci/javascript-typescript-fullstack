// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex011 - Criando uma lista de tarefas
// Isabelli Cristina Mocci - 10/03/2025
// =============================================================

/*
    🔹 Objetivo:

    - Criar uma lista de tarefas dinâmica com JavaScript:
      ⮡ Adicionar tarefas ao clicar no botão ou pressionar Enter
      ⮡ Exibir as tarefas na tela, incluindo um botão para excluí-las
      ⮡ Remover tarefas ao clicar no botão de lixeira
      ⮡ Armazenar tarefas no navegador utilizando localStorage
      ⮡ O input deve ser limpo automaticamente após adicionar uma tarefa

*/
// =============================================================

// Script será executado depois do carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  const inputTask = document.querySelector("#input-task");
  const buttonTask = document.querySelector("#button-task");
  const tasks = document.querySelector(".tasks");

  // Pega todos os <li> e salva no localStorage (converte o array p/ JSON)
  function saveTasks() {
    const taskList = Array.from(tasks.querySelectorAll("li")).map(li => li.firstChild.textContent.trim());
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }

  // Carrega as tarefas do localStorage
  function loadTasks() {
    // Chama addTask() para recriar cada item salvo na tela
    JSON.parse(localStorage.getItem("tasks") || "[]").forEach(addTask); 
  }

  // Criar um <li> para cada tarefa
  function createListItem(text) {
    const li = document.createElement("li");
    li.innerText = text;
    li.appendChild(createDeleteButton()); // Adiciona um botão de excluir
    return li;
  }

  // Cria o botão de exclusão para cada item
  function createDeleteButton() {
    const button = document.createElement("button");
    button.classList.add("apagar");
    button.innerHTML = `<span class="material-symbols-outlined">close</span>`;
    return button;
  }

  // Cria um <li> e adiciona na <ul>.
  function addTask(text) {
    if (!text.trim()) return;
    tasks.appendChild(createListItem(text));
    saveTasks();
    inputTask.value = "";  // Limpa o campo de input
    inputTask.focus();     // Mantém o foco no input
  }

  // Chama addTask() para adicionar tarefas ao clicar no botão
  buttonTask.addEventListener("click", () => addTask(inputTask.value));

  // Chama addTask() para adicionar tarefas ao clicar em ENTER
  inputTask.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && inputTask.value.trim()) addTask(inputTask.value);
  });

  // Remove os itens quando clicado na lixeira
  document.addEventListener("click", (e) => {
    const button = e.target.closest("button.apagar"); // Garante que pegamos o botão correto
    if (button) {
      button.closest("li").remove();
      saveTasks(); // Atualiza o localStorage.
    }
  });

  loadTasks(); // Ao abrir a página, chama loadTasks() para restaurar as tarefas salvas.
});
