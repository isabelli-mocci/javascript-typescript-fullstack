// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex008 - Numbers em JavaScript
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
    🔹 O que são Numbers?

    - Em JavaScript, `Number` é o tipo de dado usado para representar números inteiros e decimais.
    - Diferente de outras linguagens, **não há distinção entre inteiros e floats**.
    - Pode ser escrito de várias formas:
        ✅ Inteiro → 10
        ✅ Decimal → 10.5
        ✅ Notação científica → 1e3 (equivale a 1000)
*/

// =============================================================
// 🔹 Exemplos Simples de Numbers
// =============================================================

const inteiro = 25;       // Número inteiro
const decimal = 3.14;     // Número decimal
const cientifico = 2e4;   // Notação científica (2 * 10^4 = 20000)
const negativo = -10;     // Número negativo

console.log("Número inteiro:", inteiro);
console.log("Número decimal:", decimal);
console.log("Notação científica:", cientifico);
console.log("Número negativo:", negativo);

// =============================================================
// 🔹 Operações Matemáticas com Numbers
// =============================================================

const soma = 10 + 5;          // Adição
const subtracao = 10 - 5;     // Subtração
const multiplicacao = 10 * 5; // Multiplicação
const divisao = 10 / 2;       // Divisão
const resto = 10 % 3;         // Resto da divisão

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto da divisão:", resto);

// =============================================================
// 🔹 O JavaScript segue o padrão IEEE 754-2008 (64 bits ponto flutuante)
// =============================================================

// 📌 Principais características:

// 1️⃣ Imprecisões em cálculos decimais:
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 😬

const numGrande = 9999999999999999; // Máximo que o JS pode lidar sem perder precisão
console.log("Número muito grande:", numGrande); // Exibe 10000000000000000 (perda de precisão)

// 2️⃣ O maior inteiro seguro no JS é 2^53 - 1 (9007199254740991):
console.log("Maior inteiro seguro:", Number.MAX_SAFE_INTEGER);
console.log("Menor inteiro seguro:", Number.MIN_SAFE_INTEGER);

// 3️⃣ Suporte a Infinity e NaN:
console.log("1 / 0 =", 1 / 0); // Infinity
console.log("0 / 0 =", 0 / 0); // NaN

// 4️⃣ BigInt permite lidar com números maiores que MAX_SAFE_INTEGER:
let big = 9007199254740991n + 1n;
console.log("BigInt:", big); // 9007199254740992n

// ❌ BigInt não pode ser misturado com Number (gera erro)

// =============================================================
// 🔹 Corrigindo a imprecisão de cálculos decimais
// =============================================================

const num1 = 0.1;
const num2 = 0.2;
const resultado = Number((num1 + num2).toFixed(2)); // Corrigindo a imprecisão
console.log("Soma corrigida:", resultado); // 0.3

// =============================================================
// 🔹 Manipulando números no JavaScript
// =============================================================

// 📌 Definição de números
let primeiroNumero = 1;
let segundoNumero = 2.5;

// 🔹 Conversão number → string
console.log("Concatenação de número com string:", primeiroNumero.toString() + segundoNumero);
console.log("Tipo original ainda é:", typeof primeiroNumero);

// 🔹 Verificando se um número é inteiro
console.log("É um número inteiro?", Number.isInteger(segundoNumero)); // false

// 🔹 Convertendo permanentemente para string
primeiroNumero = primeiroNumero.toString();
console.log("Novo tipo de primeiroNumero:", typeof primeiroNumero);

// 🔹 Convertendo número para binário
let numeroBinario = 1500;
console.log("Número em binário:", numeroBinario.toString(2)); // "10111011100" (binário)

// 🔹 Arredondando com casas decimais
let numeroDecimal = 10.5789551255547;
console.log("Número arredondado:", numeroDecimal.toFixed(2)); // "10.58"

// 🔹 Verificando se um valor é NaN (Not a Number)
let notANumber = primeiroNumero * "umaString";
console.log("É NaN?", Number.isNaN(notANumber)); // true

// =============================================================
