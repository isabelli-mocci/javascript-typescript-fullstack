// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex023 - Estrutura de Repetição: For Clássico
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Estrutura de Repetição - For Clássico
    
    - O `for` é uma estrutura de repetição (loop) que executa um bloco de código um número determinado de vezes.
    - Ele possui **três partes essenciais**:
      1️⃣ Inicialização: Define a variável de controle (ex: `let i = 0`).
      2️⃣ Condição: Determina até quando o loop será executado (`i < 10`).
      3️⃣ Incremento/Decremento: Atualiza a variável de controle (`i++`).
    
    📌 Sintaxe básica:
    
    for (inicialização; condição; incremento/decremento) {
        // Código a ser executado
    }
    
*/

// =============================================================
// 🔹 Exemplo Básico: Contando de 1 a 5
// =============================================================

// i = index
for (let i = 1; i <= 5; i++) {
  console.log(`Número: ${i}`);
}
// Saída:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5

// =============================================================
// 🔹 Contando de 10 até 1 (Decremento)
// =============================================================

for (let i = 10; i >= 1; i--) {
  console.log(`Contagem regressiva: ${i}`);
}
// Saída:
// Contagem regressiva: 10
// Contagem regressiva: 9
// ...
// Contagem regressiva: 1

// =============================================================
// 🔹 Percorrendo um Array com For Clássico
// =============================================================

const nomes = ["Isabelli", "Matheus", "Lucas", "Beatriz"];

for (let i = 0; i < nomes.length; i++) {
  console.log(`Nome ${i + 1}: ${nomes[i]}`);
}
// Saída:
// Nome 1: Isabelli
// Nome 2: Matheus
// Nome 3: Lucas
// Nome 4: Beatriz

// =============================================================
// 🔹 Somando Números de um Array
// =============================================================

const numeros = [10, 20, 30, 40, 50];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // soma = soma + numeros[i]
}

console.log(`Soma total: ${soma}`); // Soma total: 150

// =============================================================
// 🔹 Trabalhando com Índices Ímpares e Pares
// =============================================================

const valores = [5, 8, 13, 21, 34, 55];

for (let i = 0; i < valores.length; i++) {
  if (i % 2 === 0) {
      console.log(`Índice ${i} é PAR - Valor: ${valores[i]}`);
  } else {
      console.log(`Índice ${i} é ÍMPAR - Valor: ${valores[i]}`);
  }
}
// Saída:
// Índice 0 é PAR - Valor: 5
// Índice 1 é ÍMPAR - Valor: 8
// Índice 2 é PAR - Valor: 13
// Índice 3 é ÍMPAR - Valor: 21
// Índice 4 é PAR - Valor: 34
// Índice 5 é ÍMPAR - Valor: 55

// =============================================================
// 🔹 Interrompendo o Loop com `break`
// =============================================================

for (let i = 1; i <= 10; i++) {
  console.log(`Número: ${i}`);
  if (i === 5) {
      console.log("Interrompendo o loop...");
      break; // Sai do loop quando i for 5
  }
}
// Saída:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5
// Interrompendo o loop...

// =============================================================
// 🔹 Pulando Iterações com `continue`
// =============================================================

for (let i = 1; i <= 10; i++) {
  if (i === 5 || i === 7) {
      console.log(`Pulando o número ${i}`);
      continue; // Pula essa iteração e vai para a próxima
  }
  console.log(`Número: ${i}`);
}
// Saída:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Pulando o número 5
// Número: 6
// Pulando o número 7
// Número: 8
// Número: 9
// Número: 10

// =============================================================
// 🔹 Criando uma Tabela com `for` no Console
// =============================================================

console.log("Tabela de Multiplicação do 3:");
for (let i = 1; i <= 10; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}

// =============================================================
// 🔹 Loop Aninhado: Tabela de Multiplicação Completa
// =============================================================

for (let i = 1; i <= 10; i++) {
  console.log(`\n🔹 Tabuada do ${i}`);
  for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
  }
}

// =============================================================
// 🔹 Exemplo Prático: Simulando um Carregamento
// =============================================================

console.log("Carregando...");
for (let i = 0; i <= 100; i += 20) {
  console.log(`Progresso: ${i}%`);
}
console.log("Carregamento concluído!");

// =============================================================
// 🔹 Desafio: Criar um Loop para Contar Quantos Números São Maiores que 50
// =============================================================

const listaNumeros = [10, 55, 23, 75, 99, 12, 64, 33];
let contador = 0;

for (let i = 0; i < listaNumeros.length; i++) {
  if (listaNumeros[i] > 50) {
      contador++;
  }
}

console.log(`Quantidade de números maiores que 50: ${contador}`);

// =============================================================
// 🔹 Exercício: Contagem Regressiva Simulando uma Explosão
// =============================================================

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
      console.log("💥 BOOM! Explosão! 💥");
  } else {
      console.log(`⏳ Contagem regressiva: ${i}`);
  }
}
