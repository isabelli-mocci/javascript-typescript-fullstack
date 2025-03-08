// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex005 - Operadores Aritméticos
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
    🔹 Operadores Aritméticos:

    São usados para realizar operações matemáticas em JavaScript.

    ➕ Adição (+)         → Soma valores
    ➖ Subtração (-)      → Subtrai valores
    ✖️ Multiplicação (*)  → Multiplica valores
    ➗ Divisão (/)        → Divide valores
    🏁 Potenciação (**)   → Eleva um número a uma potência
    🏾 Resto da divisão (%) → Retorna o que sobra de uma divisão
*/

// =============================================================
// 🔹 Exemplos de cada operador aritmético:

const a = 10;
const b = 3;

// 1️⃣ Adição (+) → Soma valores
const soma = a + b;
console.log(`${a} + ${b} =`, soma);  // Saída: 10 + 3 = 13

// 2️⃣ Subtração (-) → Subtrai valores
const subtracao = a - b;
console.log(`${a} - ${b} =`, subtracao);  // Saída: 10 - 3 = 7

// 3️⃣ Multiplicação (*) → Multiplica valores
const multiplicacao = a * b;
console.log(`${a} × ${b} =`, multiplicacao);  // Saída: 10 × 3 = 30

// 4️⃣ Divisão (/) → Divide valores
const divisao = a / b;
console.log(`${a} ÷ ${b} =`, divisao);  // Saída: 10 ÷ 3 = 3.3333...

// 5️⃣ Potenciação (**) → Eleva um número a outra potência
const potencia = a ** b;
console.log(`${a}^${b} =`, potencia);  // Saída: 10^3 = 1000

// 6️⃣ Resto da divisão (%) → Retorna o que sobra da divisão
const resto = a % b;
console.log(`${a} % ${b} =`, resto);  // Saída: 10 % 3 = 1

// =============================================================
// 🔹 Operadores de Incremento e Decremento:

let c = 5;

// 7️⃣ Incremento (++): Aumenta 1
console.log("Antes do incremento:", c);
c++;
console.log("Depois do incremento:", c);

// 8️⃣ Decremento (--): Diminui 1
console.log("Antes do decremento:", c);
c--;
console.log("Depois do decremento:", c);

// =============================================================
// 🔹 Ordem de Precedência Matemática:

/*
  1️⃣ Parênteses ()
  2️⃣ Potenciação **
  3️⃣ Multiplicação *, Divisão / e Resto %
  4️⃣ Soma + e Subtração -
*/

const resultado = 2 + 3 * 4 ** 2 / (2 * 2);  
console.log("Resultado da expressão:", resultado);  // Segue a ordem correta!
