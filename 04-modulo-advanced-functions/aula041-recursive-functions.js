// =============================================================
// Curso de JavaScript e TypeScript - Aula 40: Recursive Functions
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 10/04/2025
// =============================================================

/*
    🔹 Recursive Functions

      → é quando uma função chama a si mesma
      → sempre precisa de uma condição de parada (caso base)
      → resolve problemas quebrando-os em partes menores
    
    🔹 Quando usar Recursive Functions?

      1. estruturas com profundidade variável (listas, árvores, etc)
      2. quando a repetição depende do próprio resultado anterior
      3. quando for mais legível que loops

      ⚠️ sem um caso base, a função entra em loop infinito
*/

// =============================================================
// 🔹 Exemplo 1 - Recursão Básica
// =============================================================

function contagemRegressiva(num) {
  if (num === 0) {
    console.log('✨ O tempo acabou!');
    return;
  }
  console.log(num);
  contagemRegressiva(num - 1);
}

contagemRegressiva(5); // Saída: 5, 4, 3, 2, 1, "✨ O tempo acabou!"

// 🧩 Aprendizado:
// - toda recursão precisa de `caso base` para não entrar em loop infinito
// - recursão resolve problemas complexos quebrando em partes menores

// =============================================================
// 🔹 Exemplo 2 - Fatorial
// =============================================================

function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Saída: 120

// =============================================================
// 🔹 Exemplo 3 - Estruturas com profundidade variável
// =============================================================

const aninhado = [1, [2, [3, [4]]]];

function desaninhar(arr) {
  let resultado = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      resultado = resultado.concat(desaninhar(item));
    } else {
      resultado.push(item);
    }
  });

  return resultado;
}

console.log(desaninhar(aninhado)); // Saída: [1, 2, 3, 4]

// 🧩 Aprendizado:
// - ideal pra estruturas desconhecidas ou com profundidade variável (tipo árvores e listas aninhadas)

// =============================================================
// 🔹 Exemplo 4 - Stack Overflow
// =============================================================

function recursaoRuim(n) {
  console.log(n);
  return recursaoRuim(n + 1); // ⚠️ NUNCA PARA!
}

// recursaoRuim(1); ❌ Cuidado! Isso dá stack overflow

// 🧩 Aprendizado:
// - toda recursão precisa de um escape (caso base)
// - recursão sem limite = caos
// - pode travar navegador ou sistema

// =============================================================
// 🔹 Exemplo 5 - Parâmetros acumulativos
// =============================================================

function somarArray(arr, indice = 0) { 
  if (indice === arr.length) return 0; 
  return arr[indice] + somarArray(arr, indice + 1); 
}

console.log(somarArray([1, 2, 3, 4])); // Saída: 10

// 🧩 Aprendizado:
// - parâmetros acumulativos ajudam a manter o estado da recursão
// - úteis pra contadores, acumuladores ou índices
// - evitam criar variáveis externas desnecessárias

// =============================================================
