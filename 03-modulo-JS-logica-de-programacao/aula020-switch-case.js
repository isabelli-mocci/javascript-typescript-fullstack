// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex020 - Estrutura Switch/Case
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Estrutura `switch/case`

    - A estrutura `switch` é usada para tomar decisões com múltiplas opções.
    - Funciona comparando um valor com diferentes `case` (casos).
    - Quando uma correspondência é encontrada, o código dentro daquele `case` é executado.
    - O `break` impede que os próximos casos sejam executados em sequência.
    - O `default` é executado se nenhum dos `case` corresponder ao valor.
*/

// =============================================================
// 🔹 Exemplo 1: Dias da Semana
// =============================================================

const diaNumero = new Date().getDay(); // Retorna um número de 0 a 6 (0 = Domingo)
let diaNome;

switch (diaNumero) {
    case 0:
        diaNome = "Domingo";
        break;
    case 1:
        diaNome = "Segunda-feira";
        break;
    case 2:
        diaNome = "Terça-feira";
        break;
    case 3:
        diaNome = "Quarta-feira";
        break;
    case 4:
        diaNome = "Quinta-feira";
        break;
    case 5:
        diaNome = "Sexta-feira";
        break;
    case 6:
        diaNome = "Sábado";
        break;
    default:
        diaNome = "Dia inválido";
}

console.log("Hoje é:", diaNome);

// =============================================================
// 🔹 Exemplo 2: Classificação de Notas
// =============================================================

const nota = 8;
let conceito;

switch (true) {
    case nota >= 9:
        conceito = "A";
        break;
    case nota >= 7:
        conceito = "B";
        break;
    case nota >= 5:
        conceito = "C";
        break;
    case nota >= 3:
        conceito = "D";
        break;
    default:
        conceito = "F";
}

console.log("Nota:", nota, "- Conceito:", conceito);

// =============================================================
// 🔹 Exemplo 3: Escolha de Frutas
// =============================================================

const fruta = "Maçã";

switch (fruta) {
    case "Banana":
        console.log("Banana custa R$ 2,00 o quilo.");
        break;
    case "Maçã":
        console.log("Maçã custa R$ 3,50 o quilo.");
        break;
    case "Uva":
        console.log("Uva custa R$ 5,00 o quilo.");
        break;
    default:
        console.log("Fruta não disponível.");
}

// =============================================================
// 🔹 Exemplo 4: Múltiplos Casos Compartilhando Código
// =============================================================

const cor = "azul";

switch (cor) {
    case "vermelho":
    case "azul":
    case "verde":
        console.log("Cor primária");
        break;
    case "amarelo":
    case "roxo":
    case "laranja":
        console.log("Cor secundária");
        break;
    default:
        console.log("Cor desconhecida");
}

// =============================================================
// 🔹 Exemplo 5: Uso sem `break`
// =============================================================

const nivel = "médio";

switch (nivel) {
    case "baixo":
        console.log("Nível Baixo");
    case "médio":
        console.log("Nível Médio");
    case "alto":
        console.log("Nível Alto");
}
// ⚠️ Como não há `break`, todos os casos após a correspondência serão executados!

// =============================================================
