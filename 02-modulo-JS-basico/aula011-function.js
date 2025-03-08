// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex011 - Funções em JavaScript
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 O que são Funções?

    - Em JavaScript, uma **função** é um bloco de código projetado para realizar uma tarefa específica.
    - Funções podem receber entradas chamadas **parâmetros** e podem retornar um valor.
    - Elas são muito usadas para organizar e reutilizar o código.
*/

// =============================================================
// 🔹 Criando Funções
// =============================================================

/*
    Função Simples
    - Uma função simples pode ser criada usando a palavra-chave `function`, seguida pelo nome da função.
*/
function saudacao() {
  console.log("Olá, seja bem-vindo!");
}
saudacao();  // Chama a função e exibe: "Olá, seja bem-vindo!"

/*
  Função com Parâmetros
  - Funções podem aceitar entradas chamadas parâmetros, que permitem passar dados para a função.
*/
function saudacaoPersonalizada(nome) {
  console.log(`Olá, ${nome}!`);
}
saudacaoPersonalizada("Isabelli");  // Exibe: "Olá, Isabelli!"

// =============================================================
// 🔹 Funções com Retorno
// =============================================================

 /* 
    - Funções podem retornar um valor, que pode ser usado em outra parte do código.
 */ 

function soma(a, b) {
  return a + b;
}
const resultado = soma(5, 3);  // Chama a função e armazena o resultado
console.log("Resultado da soma:", resultado);  // Exibe: 8

// =============================================================
// 🔹 Funções Anônimas e Arrow Functions
// =============================================================

/*
    - Funções também podem ser anônimas, ou seja, sem um nome, e geralmente são usadas em expressões.
*/
const saudacaoAnônima = function(nome) {
  console.log(`Olá, ${nome}!`);
};
saudacaoAnônima("Matheus");  // Exibe: "Olá, Matheus!"

/*
  Arrow Functions
  - As arrow functions são uma forma mais curta de escrever funções em JavaScript.
*/
const saudacaoArrow = (nome) => {
  console.log(`Olá, ${nome}!`);
};
saudacaoArrow("Felipe");  // Exibe: "Olá, Felipe!"

// =============================================================
// 🔹 Funções com Vários Parâmetros e Valor Padrão
// =============================================================

/*
    - Uma função pode aceitar vários parâmetros, e você pode passar valores diferentes para cada um deles.
*/
function multiplicacao(a, b) {
    return a * b;
}
console.log("Multiplicação:", multiplicacao(4, 2));  // Exibe: 8

/*
    Função com Valor Padrão
    - Podemos atribuir um valor padrão para um parâmetro caso ele não seja passado.
*/
function saudacaoComIdioma(nome, idioma = "português") {
    console.log(`Olá, ${nome}! Você fala ${idioma}.`);
}
saudacaoComIdioma("Carlos");  // Exibe: "Olá, Carlos! Você fala português."
saudacaoComIdioma("Ana", "inglês");  // Exibe: "Olá, Ana! Você fala inglês."

// =============================================================