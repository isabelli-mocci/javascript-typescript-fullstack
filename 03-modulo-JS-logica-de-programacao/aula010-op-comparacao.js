// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex013 - Operadores de Comparação
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
*/

// =============================================================

// Exemplos práticos:
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 5);   // false

// Diferença entre == e ===
console.log(5 == "5");  // true  (conversão implícita)
console.log(5 === "5"); // false (number VS string === false)

console.log(10 != "10");   // false  (considera apenas o valor)
console.log(10 !== "10");  // true   (valor é igual, mas tipos diferentes)
