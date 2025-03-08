// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex001 - Console.log
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
    🔹 console.log():

    O `console.log()` é utilizado para imprimir no console do navegador ou ambiente de execução 
    os valores de variáveis, mensagens e resultados de expressões.
*/

// =============================================================

// Exemplo 1: Imprimindo strings com diferentes tipos de aspas

console.log("Isabelli"); // Usando aspas simples
console.log("Cristina"); // Usando aspas duplas
console.log(`Mocci`); // Usando template literals (crase)

// =============================================================

// Exemplo 2: Usando aspas dentro de aspas
console.log('Isabelli "Mocci"'); // Aspas duplas dentro de aspas simples
console.log("Isabelli 'Mocci'"); // Aspas simples dentro de aspas duplas
console.log(`'Isabelli' "Mocci"`); // Aspas simples e duplas dentro de template literals

// =============================================================

// Exemplo 3: Imprimindo múltiplos valores de diferentes tipos
console.log(31, 15.85, "Isabelli"); // Imprime um número inteiro, um decimal e uma string

// =============================================================

// Exemplo 4: Exibindo uma frase com número
console.log('Meu nome é "Isabelli". Estou aprendendo JavaScript às', 10, 'da manhã!');
