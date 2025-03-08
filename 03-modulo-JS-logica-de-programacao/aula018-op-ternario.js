// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex018 - Operador Ternário em JavaScript
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Operador Ternário:

            condição ? "se verdadeiro" : "se falso";
    
    - O operador ternário (`? :`) é uma forma curta de escrever um `if/else` para fazer verificações rápidas em uma linha

*/

// =============================================================
// 🔹 Exemplo Básico
// =============================================================

let idade = 18;

let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"

// Exemplo acima usando if/else comum:

idade = 16;

let statusIfElse;
if (idade >= 18) {
    statusIfElse = "Maior de idade";
} else {
    statusIfElse = "Menor de idade";
}
console.log(statusIfElse); // "Menor de idade"

// =============================================================
// 🔹 Usando o Ternário para Retorno Direto
// =============================================================

function podeDirigir(idade) {
    return idade >= 18 ? "Pode dirigir 🚗" : "Não pode dirigir ❌";
}

console.log(podeDirigir(20)); // "Pode dirigir 🚗"
console.log(podeDirigir(15)); // "Não pode dirigir ❌"

// =============================================================
// 🔹 Múltiplas Condições com o Ternário
// =============================================================

let nota = 8.5;

let resultado =
    nota >= 9 ? "Aprovado com excelência! ⭐" :
    nota >= 7 ? "Aprovado! ✅" :
    nota >= 5 ? "Recuperação! ⚠️" :
    "Reprovado. ❌";

console.log(resultado);

// ⚠️ Dá pra encadear o ternário em múltiplas verificações, mas pode deixar o código confuso.

// =============================================================
// 🔹 Usando com Valores Booleanos
// =============================================================

let usuarioLogado = true;
console.log(usuarioLogado ? "Bem-vindo! 👋" : "Faça login. 🔑");

// =============================================================
// 🔹 Evitando Excesso de Ternário
// =============================================================

let temperatura = 30;

let clima = temperatura > 35 ? "Muito quente 🥵" :
           temperatura >= 25 ? "Clima agradável ☀️" :
           temperatura >= 15 ? "Friozinho bom ❄️" :
           "Muito frio! 🥶";

console.log(clima);

// =============================================================

