// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 38 - IIFE (Immediately Invoked Function Expression)
// Isabelli Cristina Mocci - 01/04/2025
// =============================================================

/*
    🔹 IIFE (Immediately Invoked Function Expression)

    Uma `IIFE` é uma função que é definida e imediatamente chamada após sua criação, sem necessidade de comando explícito de chamada de função.

    🔹 Características da IIFE:
      ⮡ é definida e invocada de forma imediata
      ⮡ usada para encapsular código
      ⮡ usada para criar escopos locais
      ⮡ pode ser anônima ou nomeada
      ⮡ evita conflitos de variáveis e poluição no escopo global

    🔹 Sintaxe:
      ⮡ A sintaxe básica de uma IIFE é a seguinte:

        (function() {
          // Código da função
        })();

    →❓Os parênteses ao redor da função garantem que ela seja tratada como uma expressão, e o segundo parêntese a invoca imediatamente.

*/

// =============================================================
// 🔹 Exemplo Básico de IIFE (Função Anônima)
// =============================================================

(function () {
  console.log("Essa função foi chamada imediatamente!");
})();

// Saída:
//   Essa função foi chamada imediatamente!

// =============================================================
// 🔹 Exemplo de IIFE com Parâmetros
// =============================================================

/* ❓A IIFE pode receber parâmetros.

Exemplo:
*/

(function (nome) {
  console.log(`Olá, ${nome}! Bem-vindo à função imediata.`);
})("Isabelli");

// Saída:
//   Olá, Isabelli! Bem-vindo à função imediata.

// =============================================================
// 🔹 Exemplo de IIFE Nomeada
// =============================================================

/* ❓Uma IIFE também pode ser nomeada.

Exemplo:
*/

(function saudacao() {
  console.log("Olá, esse é um exemplo de IIFE nomeada!");
})();

// Saída:
//   Olá, esse é um exemplo de IIFE nomeada!

// =============================================================
// 🔹 IIFE com Variáveis em Escopo Local
// =============================================================

/* ❓IIFE são usadas para criar um escopo local e evitar a poluição do escopo global

Exemplo:
*/

(function () {
  var nome = "Isabelli";
  console.log("Dentro da IIFE:", nome); // 'Isabelli'
})();

console.log("Fora da IIFE:", nome); // ReferenceError: nome is not defined

// Saída:
//   Dentro da IIFE: Isabelli
//   Fora da IIFE: ReferenceError: nome is not defined

// 🔸 Explicação:
// A variável `nome` é local à IIFE e não interfere no escopo global, evitando o conflito de nomes de variáveis.

// =============================================================