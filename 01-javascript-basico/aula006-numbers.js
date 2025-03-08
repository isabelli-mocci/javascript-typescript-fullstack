// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex006 - Manipulando Numbers
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

// 🔹 O JavaScript segue o padrão IEEE 754-2008 (64 bits ponto flutuante)

// 📌 Principais características:

// 1️⃣ Imprecisões em cálculos decimais:
console.log(0.1 + 0.2); // 0.30000000000000004 😬

// 2️⃣ O maior inteiro seguro no JS é 2^53 - 1 (9007199254740991):
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 3️⃣ Suporte a Infinity e NaN:
console.log(1 / 0); // Infinity
console.log(0 / 0); // NaN

// 4️⃣ BigInt permite lidar com números maiores que MAX_SAFE_INTEGER:
let big = 9007199254740991n + 1n;
console.log(big); // 9007199254740992n

// ❌ BigInt não pode ser misturado com Number (gera erro)

// ⚠ Cuidados com IEEE 754 no JS:
// - Use toFixed() ou toPrecision() para arredondamentos controlados
// - Para cálculos financeiros, prefira bibliotecas como Big.js ou Decimal.js

// =============================================================
// 🔹 Manipulando números no JavaScript
// =============================================================

// 📌 Definição de números
let primeiroNumero = 1;
let segundoNumero = 2.5;

// 🔹 Conversão number → string
console.log(primeiroNumero.toString() + segundoNumero); // "12" (concatenou como string)
console.log(typeof primeiroNumero); // "number" (o tipo original não mudou)

// 🔹 Verificando se um número é inteiro
console.log(Number.isInteger(segundoNumero)); // false

// 🔹 Alterando permanentemente o tipo
primeiroNumero = primeiroNumero.toString();
console.log(typeof primeiroNumero); // "string"

// 🔹 Convertendo número para binário
let numeroBinario = 1500;
console.log(numeroBinario.toString(2)); // "10111011100" (binário)

// 🔹 Arredondando com casas decimais
let numeroDecimal = 10.5789551255547;
console.log(numeroDecimal.toFixed(2)); // "10.58" (duas casas decimais)

// 🔹 Verificando se um valor é NaN (Not a Number)
let notANumber = primeiroNumero * "umaString";
console.log(Number.isNaN(notANumber)); // true
