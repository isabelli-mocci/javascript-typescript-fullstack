// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex004 - Tipos Primitivos
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
    🔹 Tipos Primitivos:

    Em JavaScript, existem 7 tipos primitivos, que são **imutáveis** 
    e armazenam valores diretamente na memória.

    Os tipos primitivos são:
      1️⃣ string    → Cadeia de caracteres
      2️⃣ number    → Números (inteiros e decimais)
      3️⃣ boolean   → Verdadeiro ou falso
      4️⃣ undefined → Variável declarada sem valor
      5️⃣ null      → Representa a ausência de valor
      6️⃣ bigint    → Números inteiros grandes
      7️⃣ symbol    → Valores únicos, usados para identificação
*/

// =============================================================
// 🔹 Exemplos de cada tipo primitivo:

// 1️⃣ String → Texto dentro de aspas
const nome = "Isabelli";  // Pode usar aspas simples ('') ou crase (``)
console.log(nome, typeof nome);  // Saída: Isabelli string

// =============================================================

// 2️⃣ Number → Pode ser inteiro ou decimal
const idade = 25;
const altura = 1.65;
console.log(idade, typeof idade);  // Saída: 25 number
console.log(altura, typeof altura);  // Saída: 1.65 number

// =============================================================

// 3️⃣ Boolean → Apenas dois valores possíveis: true (verdadeiro) ou false (falso)
const temCarteira = true;
const estaChovendo = false;
console.log(temCarteira, typeof temCarteira);  // Saída: true boolean
console.log(estaChovendo, typeof estaChovendo);  // Saída: false boolean

// =============================================================

// 4️⃣ Undefined → Uma variável declarada sem valor inicial
let endereco;
console.log(endereco, typeof endereco);  // Saída: undefined undefined

// =============================================================

// 5️⃣ Null → Representa ausência de valor (dado manualmente)
const contaBancaria = null;
console.log(contaBancaria, typeof contaBancaria);  // Saída: null object (BUG do JavaScript!)

// =============================================================

// 6️⃣ BigInt → Usado para números muito grandes (precisa de "n" no final)
const numeroGrande = 123456789012345678901234567890n;
console.log(numeroGrande, typeof numeroGrande);  // Saída: 123456789012345678901234567890n bigint

// =============================================================

// 7️⃣ Symbol → Garante um valor único, útil para identificar propriedades de objetos
const simbolo1 = Symbol("id");
const simbolo2 = Symbol("id");
console.log(simbolo1 === simbolo2);  // Saída: false (mesmo nome, mas são diferentes)
console.log(simbolo1, typeof simbolo1);  // Saída: Symbol(id) symbol
