// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex015 - Operadores Lógicos
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 Operadores Lógicos:

    &&  ►  AND  →  Retorna `true` se **todas** as condições forem verdadeiras.
    ||  ►  OR   →  Retorna `true` se **pelo menos UMA** condição for verdadeira.
    !   ►  NOT  →  Inverte o valor lógico (de `true` para `false` e vice-versa).

*/

// =============================================================

// =============================================================
// 🔹 Tipos de Operadores Lógicos em uso
// =============================================================

// 1️⃣ AND (&&) - Retorna `true` se **ambas** as expressões forem verdadeiras
let a = true;
let b = false;
console.log("a && b:", a && b);  // false, porque b é false

let c = true;
let d = true;
console.log("c && d:", c && d);  // true, porque ambas são verdadeiras

// ----------------------------------------------------------------

// 2️⃣ OR (||) - Retorna `true` se **pelo menos uma** das expressões for verdadeira
let e = false;
let f = true;
console.log("e || f:", e || f);  // true, porque f é true

let g = false;
let h = false;
console.log("g || h:", g || h);  // false, porque TODAS são falsas

// ----------------------------------------------------------------

// 3️⃣ NOT (!) - Negação - Inverte o valor lógico de uma expressão
let i = true;
let j = false;

console.log("!i:", !i);  // false, porque i é true, e a negação inverte para false
console.log("!j:", !j);  // true, porque j é false, e a negação inverte para true

// =============================================================
// 🔹 Tabelas Verdade para Operadores Lógicos
// =============================================================

// Tabela Verdade para AND (&&)

/*
    | a     | b     | a && b |
    |-------|-------|--------|
    | true  | true  | true   |
    | true  | false | false  |
    | false | true  | false  |
    | false | false | false  |
*/

// ----------------------------------------------------------------

// Tabela Verdade para OR (||)

/*
    | a     | b     | a || b |
    |-------|-------|--------|
    | true  | true  | true   |
    | true  | false | true   |
    | false | true  | true   |
    | false | false | false  |
*/

// ----------------------------------------------------------------

// Tabela Verdade para NOT (!)

/*
    | a     | !a    |
    |-------|-------|
    | true  | false |
    | false | true  |
*/