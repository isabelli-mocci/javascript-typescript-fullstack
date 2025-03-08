// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex017 - Operador Ternário
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Operador Ternário:
    
    - O operador ternário (`? :`) é uma forma curta de escrever um `if/else`.
    - Estrutura: condição ? "se verdadeiro" : "se falso";
*/

// =============================================================

// Exemplo usando if/else:
let pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário Padrão");
}

// Refatorando para operador ternário:
let nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Padrão";
console.log(nivelUsuario); // "Usuário Padrão"

// Outro exemplo:
let idade = 18;
let podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir); // "Pode dirigir"


