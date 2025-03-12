// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex007 - Criando elementos dinamicamente no DOM com For
// Isabelli Cristina Mocci - 09/03/2025
// =============================================================

/*
    🔹 Objetivo:

    - Criar elementos dinamicamente no DOM com base em um array de objetos.
    - Adicionar esses elementos dentro de um container no HTML usando FOR
*/

// =============================================================

// função para criar e adicionar elementos dinâmicos no container

function criaTags() {
  // Array de objetos com as tags que serão criados no DOM
  const elementos = [
    { tag: "p", texto: "Aprendendo JavaScript e DOM!" },
    { tag: "aside", texto: "Manipulação de elementos na prática." },
    { tag: "footer", texto: "Eu sou programadora, e isso é só o começo!" },
    { tag: "section", texto: "Front-end é incrível! 🚀" },
  ];

  const container = document.querySelector(".container");
  const divWrapper = document.createElement("div");

  // Loop FOR para percorrer o array e criar os elementos dinamicamente
  for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i]; // Desestruturação para obter a tag e o texto do objeto atual
    const novaTag = document.createElement(tag);
    novaTag.textContent = texto;
    divWrapper.appendChild(novaTag);
  }
  container.appendChild(divWrapper);
}

// executando a função
criaTags();
