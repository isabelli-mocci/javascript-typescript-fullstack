// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex002 - Variável let
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
    🔹 Variável let:

    A variável `let` é usada para declarar variáveis com escopo de bloco, ou seja,
    elas só podem ser acessadas dentro do bloco de código onde foram declaradas.
    O valor de uma variável `let` pode ser alterado ao longo do código.
*/

// =============================================================

// Exemplo 1: Declarando uma variável simples
let nome = 'Isabelli';  
console.log(nome);  // Imprime: Isabelli

// =============================================================

// Exemplo 2: Alterando o valor da variável
let idade = 25;
console.log(idade);  // Imprime: 25

idade = 26;  // Mudando o valor
console.log(idade);  // Imprime: 26

// =============================================================

// Exemplo 3: Usando `let` em um bloco condicional
let status = 'Aluno';
if (true) {
  let status = 'Professor';  // Variável 'status' dentro do bloco if
  console.log(status);  // Imprime: Professor
}
console.log(status);  // Imprime: Aluno (fora do bloco if)

// =============================================================

// Exemplo 4: Trabalhando com números e strings
let x = 10;
let y = 5;
let soma = x + y;
console.log(soma);  // Imprime: 15

let saudacao = 'Olá, ';
let nomeCompleto = saudacao + nome;
console.log(nomeCompleto);  // Imprime: Olá, Isabelli

// =============================================================

let varA = "A";
let varB = "B";
let varC = "C";
const varATemporaria = varA;

varA = varB;
varB = varC;
varC = varATemporaria;
// ou pode ser resolvido com array:
// [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);