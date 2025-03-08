// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex003 - Variável const
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
    🔹 Variável const:

    A variável `const` é usada para declarar constantes, ou seja, valores que **não podem ser alterados** após a atribuição inicial. 
    Possui escopo de bloco, como `let`, e exige que seja inicializada no momento da declaração.
*/

// =============================================================

// Exemplo 1: Declarando uma constante simples
const nome = 'Isabelli';
console.log(nome);  // Imprime: Isabelli

// =============================================================

// Exemplo 2: Tentando alterar uma constante (isso gera erro)
// const idade = 25;
// idade = 26;  // ❌ Erro! Não é possível reatribuir um valor a uma constante

// =============================================================

// Exemplo 3: Uso de `const` com objetos (propriedades podem ser alteradas)
const pessoa = {
  nome: 'Isabelli',
  idade: 25
};
console.log(pessoa);  // Imprime: { nome: 'Isabelli', idade: 25 }

pessoa.idade = 26;  // ✅ Pode alterar propriedades do objeto
console.log(pessoa);  // Imprime: { nome: 'Isabelli', idade: 26 }

// =============================================================

// Exemplo 4: Uso de `const` com arrays (elementos podem ser alterados)
const numeros = [1, 2, 3];
console.log(numeros);  // Imprime: [1, 2, 3]

numeros.push(4);  // ✅ Pode adicionar elementos no array
console.log(numeros);  // Imprime: [1, 2, 3, 4]
