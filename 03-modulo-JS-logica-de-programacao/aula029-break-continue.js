// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex029 - Controle de Fluxo: Break e Continue
// Isabelli Cristina Mocci - 10/03/2025
// =============================================================

/*
    🔹 Break e Continue

    - São utilizados para alterar o fluxo normal de loops
            ⮡ `break`: interrompe a execução do loop
            ⮡ `continue`: pula a iteração atual e vai para a próxima

*/

// =============================================================
// 🔹 Exemplo com Break
// =============================================================

console.log("Loop com break:");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Interrompendo o loop no número 5...");
        break; // Para o loop quando i for 5
    }
    console.log(i);
}

// =============================================================
// 🔹 Exemplo com Continue
// =============================================================

console.log("\nLoop com continue:");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Pulando o número 5...");
        continue; // Pula a iteração quando i for 5 e continua o loop
    }
    console.log(i);
}

// =============================================================
// 🔹 Exemplo Prático: Encontrar número em um array com Break
// =============================================================

const numeros = [10, 20, 30, 40, 50, 60];

console.log("\nProcurando o número 40...");

for (let numero of numeros) {
    console.log(`Analisando número: ${numero}`);
    if (numero === 40) {
        console.log("Número 40 encontrado! Parando a busca.");
        break;
    }
}

// =============================================================
// 🔹 Exemplo Prático: Pular números pares com Continue
// =============================================================

console.log("\nExibindo apenas números ímpares:");

for (let numero of numeros) {
    if (numero % 2 === 0) {
        continue; // Pula os números pares
    }
    console.log(numero);
}

