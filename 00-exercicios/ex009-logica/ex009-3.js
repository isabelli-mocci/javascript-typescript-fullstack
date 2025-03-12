// ============================================================= 
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex009 - Exercício com Lógica de Programação Parte 3
// Isabelli Cristina Mocci - 10/03/2025
// =============================================================

/*
    🔹 Objetivo:
    
    - Criar uma função que recebe um nº e retorna:
      ⮡ nº é divisível por 3 e 5 = FizzBuzz
      ⮡ nº é divisível por 3 = Fizz
      ⮡ nº é divisível por 5 = Buzz
      ⮡ nº **NÃO** é divisível por 3 e 5 = retorna o próprio nº
    - Deve conferir se é realmente um number
    - Usar números de 0 a 100 
*/

// =============================================================

function fizzBuzz(numero) {
  if (typeof numero !== 'number') return 'Erro: Entrada inválida!';
  if (numero < 0 || numero > 100) return 'Erro: Número fora do intervalo!';

  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';

  return numero; // Retorna o próprio número se não for divisível por 3 ou 5
}

// 🔹 Testes
console.log(fizzBuzz(9));     // "Fizz"
console.log(fizzBuzz(10));    // "Buzz"
console.log(fizzBuzz(15));    // "FizzBuzz"
console.log(fizzBuzz(7));     // 7
console.log(fizzBuzz(101));   // "Erro: Número fora do intervalo!"
console.log(fizzBuzz('A'));   // "Erro: Entrada inválida!"

// 🔹 Teste de 0 a 100
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}