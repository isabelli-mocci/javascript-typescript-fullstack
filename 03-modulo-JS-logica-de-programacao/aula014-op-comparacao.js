// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex014 - Operadores de Comparação em JavaScript
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 Operadores de Comparação:

    >    Maior que
    <    Menor que
    >=   Maior ou igual a
    <=   Menor ou igual a
    ==   Igualdade (só valor)
    ===  Igualdade estrita (compara valor e tipo)
    !=   Diferente (só valor)
    !==  Diferente estrito (compara valor e tipo)

    - Eles retornam um valor booleano (`true` ou `false`) com base no resultado da comparação.
*/

// =============================================================
// 🔹 Operadores de Comparação em uso
// =============================================================

// 1️⃣ Igualdade (==) → Compara valor e desconsidera tipo

let a = 5;
let b = "5";

console.log("a == b:", a == b);  // true, porque o valor 5 é igual a "5"

// --------------------------------------------------------------

// 2️⃣ Igualdade Estrita (===) → Compara valores **e** tipos

console.log("a === b:", a === b);  // false, porque 5 (number) não é igual a "5" (string)

// --------------------------------------------------------------

// 3️⃣ Desigualdade (!=) → Compara se os valores são DIFERENTES (desconsidera tipo)

let c = 10;
let d = "10";
console.log("c != d:", c != d);  // false, porque 10 é considerado igual a "10" (com coerção de tipo)

// --------------------------------------------------------------

// 4️⃣ Desigualdade Estrita (!==) → Compara se os valores **ou** os tipos são diferentes

console.log("c !== d:", c !== d);  // true, porque 10 (number) não é igual a "10" (string)

// --------------------------------------------------------------

// 5️⃣ Maior que (>)

let e = 15;
let f = 10;
console.log("e > f:", e > f);  // true, porque 15 é maior que 10

// --------------------------------------------------------------

// 6️⃣ Maior ou igual a (>=)

console.log("e >= f:", e >= f);  // true, porque 15 é maior ou igual a 10

// --------------------------------------------------------------

// 7️⃣ Menor que (<) 

let g = 3;
let h = 7;
console.log("g < h:", g < h);  // true, porque 3 é menor que 7

// --------------------------------------------------------------

// 8️⃣ Menor ou igual a (<=)

console.log("g <= h:", g <= h);  // true, porque 3 é menor ou igual a 7

// =============================================================
// 🔹 Comparação de Tipos Diferentes
// =============================================================

// Comparando um número e uma string
let num = 100;
let str = "100";

// Igualdade com Coerção de Tipo (==)
console.log("num == str:", num == str);  // true

// Igualdade Estrita (===)
console.log("num === str:", num === str);  // false (number VS string)

// =============================================================
// 🔹 Comparação entre Objetos
// =============================================================

let obj1 = { nome: "Isabelli" };
let obj2 = { nome: "Isabelli" };

// Objetos são diferentes se não referem ao mesmo lugar na memória

console.log("obj1 == obj2:", obj1 == obj2);  // false, objetos não são iguais por referência
console.log("obj1 === obj2:", obj1 === obj2);  // false, objetos não são iguais por referência

// Mesmo com os mesmos valores internos, como os objetos são passados por referência, eles são considerados diferentes.

obj2 = obj1;  // Agora, obj2 refere-se ao mesmo objeto que obj1
console.log("obj1 === obj2:", obj1 === obj2);  // true, pois agora ambos apontam para o mesmo objeto
