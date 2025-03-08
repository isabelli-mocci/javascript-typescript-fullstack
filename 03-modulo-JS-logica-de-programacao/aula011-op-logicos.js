// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex014 - Operadores Lógicos
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 Operadores Lógicos:

    &&  ►  AND  →  Retorna `true` se **todas** as condições forem verdadeiras.
    ||  ►  OR   →  Retorna `true` se **pelo menos UMA** condição for verdadeira.
    !   ►  NOT  →  Inverte o valor lógico (de `true` para `false` e vice-versa).
*/

// =============================================================

// Exemplos práticos:
console.log(true && true);   // true  (ambos são verdadeiros)
console.log(true && false);  // false (uma das condições é falsa)
console.log(10 > 5 && 8 < 12); // true (as duas expressões são verdadeiras)

console.log(true || false);  // true  (pelo menos uma é verdadeira)
console.log(false || false); // false (nenhuma é verdadeira)
console.log(5 > 10 || 8 > 3); // true (a segunda condição é verdadeira)

console.log(!true);  // false (inverte o valor lógico)
console.log(!false); // true  (inverte o valor lógico)
console.log(!(10 > 5)); // false (10 > 5 é true, mas o ! inverte para false)

// Exemplo real:
let temConta = true;
let temSaldo = false;

console.log(temConta && temSaldo); // false (precisa ter conta **e** saldo para ser true)
console.log(temConta || temSaldo); // true  (basta ter uma das condições verdadeiras)
console.log(!temConta); // false (o NOT inverte o valor)
