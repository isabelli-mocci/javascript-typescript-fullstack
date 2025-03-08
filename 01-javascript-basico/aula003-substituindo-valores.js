// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex003 - Substituindo o valor das variáveis 
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
Substituir o valor das variáveis para:

varA = B
varB = C
varC = A
*/
// =============================================================

let varA = "A";
let varB = "B";
let varC = "C";
const varATemporaria = varA;

varA = varB;
varB = varC;
varC = varATemporaria;
// ou pode ser resolvido com array:
// [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
