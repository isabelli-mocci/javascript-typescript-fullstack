// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex027 - DOM (Document Object Model)
// Isabelli Cristina Mocci - 09/03/2025
// =============================================================

/*
    🔹 DOM (Document Object Model)
    
    - O **DOM** é uma interface de programação de aplicações (API) para HTML e XML.
    - Ele representa a estrutura do documento como uma árvore de nós, onde cada nó é um elemento, atributo ou texto do documento.
    - No JavaScript, o DOM permite acessar, modificar e interagir com o conteúdo e a estrutura de uma página web.
    - O DOM é como a **ponte** entre o conteúdo da página e os scripts que podem interagir com ele.
    
    📌 Alguns Métodos Principais do DOM:
    - `getElementById()`
    - `getElementsByClassName()`
    - `getElementsByTagName()`
    - `querySelector()`
    - `querySelectorAll()`
    - `createElement()`
    - `appendChild()`
    - `removeChild()`
    - `innerHTML`
    - `style`
*/

// =============================================================
// 🔹 Acessando Elementos no DOM
// =============================================================

// Acessando um elemento pelo ID
const titulo = document.getElementById("titulo");
console.log(titulo);

// Acessando elementos pelo nome da classe
const paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);

// Acessando todos os elementos de uma tag
const listaItems = document.getElementsByTagName("li");
console.log(listaItems);

// Acessando com querySelector (seletores CSS)
const primeiroParagrafo = document.querySelector(".paragrafo");
console.log(primeiroParagrafo);

// Acessando todos os elementos com querySelectorAll
const todosParagrafos = document.querySelectorAll("p");
console.log(todosParagrafos);

// =============================================================
// 🔹 Modificando o Conteúdo de um Elemento
// =============================================================

// Modificando o conteúdo de um elemento
titulo.innerHTML = "Novo Título";

// Adicionando texto ao conteúdo de um elemento
const novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Este é um parágrafo novo criado via DOM!";
document.body.appendChild(novoParagrafo);

// =============================================================
// 🔹 Modificando Atributos e Estilos
// =============================================================

// Modificando o atributo de um elemento
titulo.setAttribute("class", "titulo-modificado");

// Modificando o estilo de um elemento diretamente no JavaScript
titulo.style.color = "blue";
titulo.style.fontSize = "24px";

// =============================================================
// 🔹 Criando e Removendo Elementos no DOM
// =============================================================

// Criando um novo elemento
const lista = document.createElement("ul");
const item1 = document.createElement("li");
item1.innerText = "Item 1";
const item2 = document.createElement("li");
item2.innerText = "Item 2";

// Adicionando os itens à lista
lista.appendChild(item1);
lista.appendChild(item2);

// Adicionando a lista ao corpo da página
document.body.appendChild(lista);

// Removendo um elemento
const itemRemover = document.querySelector("li");
itemRemover.remove();

// =============================================================
// 🔹 Manipulando Eventos no DOM
// =============================================================

// Adicionando um evento de clique a um botão
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    alert("Botão clicado!");
});

// Criando um evento de mudança de cor com clique
btn.addEventListener("click", () => {
    titulo.style.color = "red";
});

// =============================================================
// 🔹 Alterando Conteúdo com `innerHTML` e `textContent`
// =============================================================

// Usando innerHTML para adicionar conteúdo HTML
const div = document.querySelector(".caixa");
div.innerHTML = "<h2>Texto dentro de uma div!</h2>";

// Usando textContent para adicionar apenas texto
div.textContent = "Este é um texto sem HTML";

// =============================================================
// 🔹 Exemplo de Manipulação de Listagem de Tarefas
// =============================================================

// Exemplo de como adicionar tarefas dinamicamente a uma lista
const addTaskButton = document.querySelector("#addTaskButton");
const inputTask = document.querySelector("#inputTask");
const taskList = document.querySelector("#taskList");

addTaskButton.addEventListener("click", () => {
    const task = inputTask.value;
    if (task) {
        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        taskList.appendChild(taskItem);
        inputTask.value = ""; // Limpa o input após adicionar
    }
});

// =============================================================
// 🔹 Exemplo de Alterando o Estilo de Elementos com Classe
// =============================================================

const mudarEstiloButton = document.querySelector("#mudarEstilo");
mudarEstiloButton.addEventListener("click", () => {
    titulo.classList.add("titulo-modificado");
});

// =============================================================
// 🔹 Exemplo de Adicionando e Removendo Classes
// =============================================================

// Adicionando uma classe
titulo.classList.add("classe-nova");

// Removendo uma classe
titulo.classList.remove("titulo-modificado");

// Verificando se um elemento possui uma classe
if (titulo.classList.contains("classe-nova")) {
    console.log("O título tem a classe 'classe-nova'.");
} else {
    console.log("O título não tem a classe 'classe-nova'.");
}

// =============================================================
// 🔹 Atualizando o Conteúdo de uma Tabela com o DOM
// =============================================================

const tabela = document.querySelector("table");
const linha = document.createElement("tr");
const celula1 = document.createElement("td");
celula1.textContent = "Novo Valor 1";
const celula2 = document.createElement("td");
celula2.textContent = "Novo Valor 2";

// Adicionando a linha à tabela
linha.appendChild(celula1);
linha.appendChild(celula2);
tabela.appendChild(linha);

// =============================================================
// 🔹 Exemplo de Alterando Atributos de Imagem
// =============================================================

const imagem = document.querySelector("img");
imagem.setAttribute("src", "nova_imagem.jpg");
imagem.setAttribute("alt", "Imagem atualizada");

// =============================================================
// 🔹 Desafio: Criar um botão que mude o título da página e altere o estilo do corpo
// =============================================================

const mudarTituloButton = document.querySelector("#mudarTitulo");
mudarTituloButton.addEventListener("click", () => {
    document.title = "Novo Título da Página";
    document.body.style.backgroundColor = "lightblue";
});
