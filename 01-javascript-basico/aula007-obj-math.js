// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex007 - Objeto "Math"
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

// 🔹 Arredondamentos
let numeroBase = 9.49578;
console.log(Math.floor(numeroBase)); // 9  → Arredonda para baixo
console.log(Math.ceil(numeroBase));  // 10 → Arredonda para cima
console.log(Math.round(numeroBase)); // 9  → Retorna o mais próximo

// 🔹 Máximo e mínimo de uma sequência de números
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // 1500 → Maior número
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // -50  → Menor número

// 🔹 Gerando números aleatórios
console.log(Math.random());               // Número aleatório entre 0 e 1
console.log(Math.random() * (10 - 5) + 5); // Número aleatório entre 5 e 10
console.log(Math.floor(Math.random() * (10 - 5 + 1) + 5)); // Número aleatório arredondado

// 🔹 Outras funções úteis do Math
console.log(Math.PI);           // 3.141592653589793 → Valor de PI
console.log(numeroBase ** 0.5); // 3.08 → Raiz quadrada de numeroBase
console.log(Math.sqrt(numeroBase));  // método embutido do JavaScript que calcula a raiz quadrada de um número
