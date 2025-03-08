// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex006 - Interação com o Usuário com Prompt e Alert
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
    🔹 Interação com o Usuário:

    - `prompt()` → Solicita uma entrada do usuário (sempre retorna uma string)
    - `alert()` → Exibe um aviso na tela
*/

// =============================================================
// 🔹 Entrada de Dados com prompt():

const num1 = Number(prompt("Digite o primeiro número:")); // Convertendo string para número
const num2 = Number(prompt("Digite o segundo número:"));

// =============================================================
// 🔹 Operações Matemáticas:

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
const potencia = num1 ** num2;
const resto = num1 % num2;

// =============================================================
// 🔹 Exibição dos Resultados com alert():

alert(`🔢 Resultados das operações:
➕ Soma: ${num1} + ${num2} = ${soma}
➖ Subtração: ${num1} - ${num2} = ${subtracao}
✖️ Multiplicação: ${num1} × ${num2} = ${multiplicacao}
➗ Divisão: ${num1} ÷ ${num2} = ${divisao}
🏁 Potenciação: ${num1}^${num2} = ${potencia}
🏾 Resto da divisão: ${num1} % ${num2} = ${resto}
`);

// =============================================================
