// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex008 - Customizando Parágrafos com JavaScript
// Isabelli Cristina Mocci - 09/03/2025
// =============================================================

/*
    🔹 Objetivo:
    
    - Selecionar todos os parágrafos dentro de uma `<div>` específica e estilizar seus textos com base na cor de fundo do `<body>`.
    - Mudar a cor da fonte dos parágrafos para branco com JS.
    
*/
// =============================================================

function customizandoParagrafo() {
  const divParagrafos = document.querySelector(".paragrafos");
  const todosParagrafos = divParagrafos.querySelectorAll("p");

  // Obtendo a cor de fundo do body de forma dinâmica
  const estilosBody = getComputedStyle(document.body);
  const corDeFundoBody = estilosBody.backgroundColor;
  console.log(`Cor de fundo do body: ${corDeFundoBody}`); // saída: rgb(0, 128, 128)

  // Iterando sobre os parágrafos e exibindo no console
  for (let paragrafos of todosParagrafos) {
    paragrafos.style.backgroundColor = corDeFundoBody;
    paragrafos.style.color = "white";
  }
}
// Chamando a função para aplicar as mudanças
customizandoParagrafo();
