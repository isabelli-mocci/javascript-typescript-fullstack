// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex010 - Arrays em JavaScript
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 O que são Arrays?

    - Em JavaScript, um **array** é uma estrutura de dados usada para armazenar múltiplos valores.
    - Ele pode conter valores de diferentes tipos: números, strings, objetos, outros arrays, etc.
    - Arrays são indexados, ou seja, cada item dentro de um array tem um índice (posição) único.
    - Os índices começam em **0**.
*/

// =============================================================
// 🔹 Criando Arrays
// =============================================================

const frutas = ["Maçã", "Banana", "Laranja", "Morango"];
console.log("Array de frutas:", frutas);

// Arrays com diferentes tipos de dados
const misto = [10, "Texto", true, [1, 2, 3], { nome: "Isabelli", idade: 25 }];
console.log("Array misto:", misto);

// Array vazio
const vazio = [];
console.log("Array vazio:", vazio);

// =============================================================
// 🔹 Acessando e Modificando Valores do Array
// =============================================================

console.log("Primeira fruta:", frutas[0]); // "Maçã"
console.log("Última fruta:", frutas[frutas.length - 1]); // "Morango"

// Modificando o valor de um índice
frutas[1] = "Uva";
console.log("Array de frutas modificado:", frutas);

// =============================================================
// 🔹 Métodos Comuns para Arrays
// =============================================================

// Adicionando um item no final do array
frutas.push("Pera");
console.log("Após adicionar no final:", frutas);

// Adicionando um item no início do array
frutas.unshift("Abacaxi");
console.log("Após adicionar no início:", frutas);

// Removendo o último item do array
frutas.pop();
console.log("Após remover o último item:", frutas);

// Removendo o primeiro item do array
frutas.shift();
console.log("Após remover o primeiro item:", frutas);

// Removendo sem alterar índices
delete frutas[0]; // não altera o comprimento do array, deixa um undefined no lugar do item excluído
console.log("Removendo 1º item, mas mantendo o espaço dele:",frutas);

// Encontrando o índice de um item
const indiceLaranja = frutas.indexOf("Laranja");
console.log("Índice de Laranja:", indiceLaranja); // 2

// Verificando se um valor existe no array
console.log("Contém 'Uva'?", frutas.includes("Uva")); // true

// =============================================================
// 🔹 Ordenando Arrays
// =============================================================

// Ordenando um array de strings
const palavras = ["banana", "abacaxi", "manga", "morango"];
palavras.sort();
console.log("Array de frutas ordenado:", palavras);

// Ordenando um array de números
const numeros = [50, 20, 100, 5];
numeros.sort((a, b) => a - b); // ordenando em ordem crescente
console.log("Array de números ordenado:", numeros);

// =============================================================
// 🔹 Copiando Arrays
// =============================================================

// Usando slice para copiar parte do array
const frutasCopia = frutas.slice(0, 2); // copia os 2 primeiros itens
console.log("Copia das frutas:", frutasCopia);

// Usando spread para copiar todo o array
const frutasCopia2 = [...frutas];
console.log("Outra cópia das frutas:", frutasCopia2);

// =============================================================


