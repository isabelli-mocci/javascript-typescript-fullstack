// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex009 - Exercicio com Lógica de Programação Parte I
// Isabelli Cristina Mocci - 10/03/2025
// =============================================================

/*
    🔹 Objetivo:
    
    - Criar uma função que recebe dois números e retorna qual o
    maior número.
    
*/
// =============================================================

function maiorNumero(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log("Maior nº:", maiorNumero(50, 100)); // Maior nº: 10

// ou 

const maxNumber = (numA, numB) => numA > numB ? numA : numB;
console.log("Maior nº:", maxNumber(10, 820)); // Maior nº: 820