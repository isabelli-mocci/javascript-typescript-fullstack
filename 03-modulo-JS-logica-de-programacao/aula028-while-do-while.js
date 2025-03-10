// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex028 - Estruturas de Repetição: While e Do While
// Isabelli Cristina Mocci - 09/03/2025
// =============================================================

/*
    🔹 Estruturas de Repetição: While e Do While

    - `while` e `do while` são laços de repetição usados para executar blocos de código enquanto uma condição for verdadeira.
    
    - Diferença entre `while` e `do while`:
        ⮡ `while`: testa a condição ANTES de executar o bloco.
        ⮡ `do while`: executa o bloco e DEPOIS testa a condição.
*/

// =============================================================
// 🔹 Exemplo com While
// =============================================================

let contador = 0;

while (contador < 5) {
    console.log(`While - Contador: ${contador}`);
    contador++; // Incremento para evitar loop infinito
}

// =============================================================
// 🔹 Exemplo com Do While
// =============================================================

let numero = 0;

do {
    console.log(`Do While - Número: ${numero}`);
    numero++; // Incremento para evitar loop infinito
} while (numero < 5);

// =============================================================
// 🔹 Exemplo Prático: Gerando número aleatório até obter 5
// =============================================================

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10); // Números entre 0 e 9
}

let numeroAleatorio;

// Utilizando While
numeroAleatorio = gerarNumeroAleatorio();
while (numeroAleatorio !== 5) {
    console.log(`While - Número gerado: ${numeroAleatorio}`);
    numeroAleatorio = gerarNumeroAleatorio();
}

console.log("While - Número 5 encontrado!");

// Utilizando Do While
do {
    numeroAleatorio = gerarNumeroAleatorio();
    console.log(`Do While - Número gerado: ${numeroAleatorio}`);
} while (numeroAleatorio !== 5);

console.log("Do While - Número 5 encontrado!");

