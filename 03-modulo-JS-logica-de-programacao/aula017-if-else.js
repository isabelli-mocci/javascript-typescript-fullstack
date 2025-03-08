// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex017 - If, Else e Else If em JavaScript
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Estruturas Condicionais:

    if        ► Executa um bloco de código se a condição for VERDADEIRA
    else if   ► Define novas condições caso o `if` seja falso
    else      ► Executa um bloco de código caso NENHUMA condição anterior seja atendida.
    switch    ► Estrutura de decisão para múltiplas opções.
*/

// =============================================================
// 🔹 Exemplo Básico do `if`
// =============================================================

let idade = 20;

if (idade >= 18) {  
    console.log("Você é maior de idade.");  
}

// Se a idade for 20, ele imprime "Você é maior de idade."
// Se a idade for 17, **não imprime nada** porque não temos um `else`.

// =============================================================
// 🔹 Exemplo com `else`
// =============================================================

idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Se idade for 16, ele imprime "Você é menor de idade."

// ⚠️ Com condições simples, o operador ternário (`? :`) pode ser usado para reduzir código.

/// =============================================================
// 🔹 Exemplo com `else if`
// =============================================================

let nota = 7.5;

if (nota >= 9) {
    console.log("Aprovado com excelência! ⭐");
} else if (nota >= 7) {
    console.log("Aprovado! ✅");
} else if (nota >= 5) {
    console.log("Recuperação! ⚠️");
} else {
    console.log("Reprovado. ❌");
}

// ⚠️ Evite muitos `else if`: usar `switch` quando há muitas opções

// =============================================================
// 🔹 Trabalhando com Comparações
// =============================================================

let temperatura = 30;

if (temperatura > 35) {
    console.log("Está muito quente! 🥵");
} else if (temperatura >= 25 && temperatura <= 35) {
    console.log("Clima agradável. ☀️");
} else {
    console.log("Está frio! 🥶");
}

// =============================================================
// 🔹 Usando `if` para verificar valores específicos
// =============================================================

let usuarioLogado = false;

if (usuarioLogado) {
    console.log("Bem-vindo de volta! 👋");
} else {
    console.log("Por favor, faça login. 🔑");
}

// =============================================================
// 🔹 Condições Aninhadas
// =============================================================

let temCartao = true;
let saldo = 50;
let precoCompra = 30;

if (temCartao) {
    if (saldo >= precoCompra) {
        console.log("Compra aprovada! ✅");
    } else {
        console.log("Saldo insuficiente. ❌");
    }
} else {
    console.log("Você precisa de um cartão para realizar a compra. 💳");
}

// =============================================================
