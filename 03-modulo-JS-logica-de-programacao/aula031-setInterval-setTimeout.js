// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 031 - setInterval e setTimeout
// Isabelli Cristina Mocci - 10/03/2025
// =============================================================

/*
    🔹 setInterval e setTimeout:
    
    - O `setInterval` é usado para executar uma função repetidamente, com um intervalo de tempo entre cada execução.
    - O `setTimeout` é usado para executar uma função uma única vez após um tempo especificado.

    São úteis para tarefas assíncronas, como animações, atualizações de tempo e execução de processos repetitivos.
*/

// =============================================================
// 🔹 Exemplo de setInterval
// =============================================================

console.log("Exemplo com setInterval:");

let contadorInterval = 0;
const intervalo = setInterval(() => {
    contadorInterval++;
    console.log(`Contagem do setInterval: ${contadorInterval}`);

    if (contadorInterval === 5) {
        clearInterval(intervalo); // Para a execução do setInterval após 5 repetições
        console.log("O setInterval foi interrompido!");
    }
}, 1000); // Executa a função a cada 1 segundo (1000 milissegundos)

// =============================================================
// 🔹 Exemplo de setTimeout
// =============================================================

console.log("\nExemplo com setTimeout:");

setTimeout(() => {
    console.log("Essa mensagem aparece após 3 segundos!");
}, 3000); // Executa a função após 3 segundos (3000 milissegundos)

// =============================================================
// 🔹 Combinando setInterval e setTimeout
// =============================================================

console.log("\nExemplo combinado com setInterval e setTimeout:");

let contadorTimeout = 0;
const intervaloCombinado = setInterval(() => {
    contadorTimeout++;
    console.log(`Contagem do setInterval: ${contadorTimeout}`);

    if (contadorTimeout === 3) {
        clearInterval(intervaloCombinado); // Para a execução do setInterval após 3 repetições
        console.log("O setInterval foi interrompido após 3 repetições.");
    }
}, 1000);

setTimeout(() => {
    console.log("Mensagem exibida após 2 segundos, mas o setInterval continuará.");
}, 2000); // Executa a função após 2 segundos
