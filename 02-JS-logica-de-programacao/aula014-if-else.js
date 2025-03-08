// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex015 - if, else if e else
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Estruturas Condicionais:

    if        ► Executa um bloco de código se a condição for VERDADEIRA
    else if   ► Define novas condições caso o `if` seja falso
    else      ► Executa um bloco de código caso NENHUMA condição anterior seja verdadeira.
    switch    ► Estrutura de decisão para múltiplas opções.
*/

// =============================================================

// Exemplos práticos:

let idade = 18;

if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}
// Saída: "Adulto"

// =============================================================

let hora = 18;

if (hora >= 0 && hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

// Saída: "Boa noite"

// =============================================================

// Exemplo com switch:
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("Você escolheu vermelho.");
    break;
  case "azul":
    console.log("Você escolheu azul.");
    break;
  case "verde":
    console.log("Você escolheu verde.");
    break;
  default:
    console.log("Cor não reconhecida.");
}

// Saída: "Você escolheu azul."
