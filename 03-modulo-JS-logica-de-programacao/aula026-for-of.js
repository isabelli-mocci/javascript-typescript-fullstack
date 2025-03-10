// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex026 - Laço de Repetição "for...of"
// Isabelli Cristina Mocci - 09/03/2025
// =============================================================

/*
    🔹 Laço de Repetição `for...of`:
    
    - O `for...of` é utilizado para iterar sobre os **valores** de um **array** ou de **outros objetos iteráveis** (como strings, mapas, conjuntos, etc.).
    - Ao contrário do `for...in`, que itera sobre **propriedades** de objetos e **índices** de arrays, o `for...of` foca nos **valores** em si.
    - Ele é mais adequado para iterar sobre arrays, pois garante a ordem correta dos elementos e não acessa as propriedades como o `for...in`.

    ⚠️ Importante: O `for...of` não funciona com objetos simples (não iteráveis), como objetos literais. Para esses casos, o `for...in` é mais indicado.
*/

// =============================================================
// 🔹 Exemplo de `for...of` com Arrays
// =============================================================

// Definindo um array
const frutas = ["Maçã", "Banana", "Laranja", "Manga"];

// Iterando sobre os valores do array
for (let fruta of frutas) {
    console.log(fruta);  // Exibe o valor do array
}

// Saída esperada:
// Maçã
// Banana
// Laranja
// Manga

// =============================================================
// 🔹 Exemplo de `for...of` com Strings
// =============================================================

// Definindo uma string
const nome = "Isabelli";

// Iterando sobre os caracteres da string
for (let letra of nome) {
    console.log(letra);  // Exibe cada letra da string
}

// Saída esperada:
// I
// s
// a
// b
// e
// l
// l
// i

// =============================================================
// 🔹 Exemplo de `for...of` com Map
// =============================================================

// Definindo um Map (estrutura de dados que armazena pares chave-valor)
const pessoa = new Map([
    ["nome", "Isabelli"],
    ["idade", 25],
    ["profissão", "Desenvolvedora Web"]
]);

// Iterando sobre os valores do Map
for (let valor of pessoa) {
    console.log(valor);  // Exibe o par [chave, valor] do Map
}

// Saída esperada:
// [ 'nome', 'Isabelli' ]
// [ 'idade', 25 ]
// [ 'profissão', 'Desenvolvedora Web' ]

// =============================================================
// 🔹 Exemplo de `for...of` com Set
// =============================================================

// Definindo um Set (estrutura de dados que armazena valores únicos)
const numeros = new Set([1, 2, 3, 4, 5]);

// Iterando sobre os valores do Set
for (let numero of numeros) {
    console.log(numero);  // Exibe os valores do Set
}

// Saída esperada:
// 1
// 2
// 3
// 4
// 5

// =============================================================
// 🔹 Usando `for...of` com Objetos Iteráveis
// =============================================================

// Exemplo com Object.entries() para iterar sobre um objeto
const carro = {
    modelo: "Fusca",
    ano: 1967,
    cor: "azul"
};

// Iterando sobre as entradas (pares chave-valor) do objeto
for (let [chave, valor] of Object.entries(carro)) {
    console.log(`${chave}: ${valor}`);
}

// Saída esperada:
// modelo: Fusca
// ano: 1967
// cor: azul

// =============================================================
// 🔹 Comparando `for...in` e `for...of`
// =============================================================

// Usando `for...in` (sobre índices de um array)
console.log("Usando for...in:");
for (let indice in frutas) {
    console.log(indice);  // Índices do array
}

// Usando `for...of` (sobre valores do array)
console.log("Usando for...of:");
for (let fruta of frutas) {
    console.log(fruta);  // Valores do array
}

// Saída esperada para `for...in`:
// 0
// 1
// 2
// 3

// Saída esperada para `for...of`:
// Maçã
// Banana
// Laranja
// Manga

// =============================================================
// 🔹 Usando `for...of` com Arrays Multidimensionais
// =============================================================

// Exemplo de um array multidimensional (array de arrays)
const matriculas = [
    ["Ana", "Matemática", 7.8],
    ["Carlos", "Física", 8.2],
    ["Beatriz", "Química", 9.0]
];

// Iterando sobre um array multidimensional com `for...of`
for (let aluno of matriculas) {
    console.log(`Aluno: ${aluno[0]}`);
    console.log(`Curso: ${aluno[1]}`);
    console.log(`Nota: ${aluno[2]}`);
    console.log("-------------------------------");
}

// Saída esperada:
// Aluno: Ana
// Curso: Matemática
// Nota: 7.8
// -------------------------------
// Aluno: Carlos
// Curso: Física
// Nota: 8.2
// -------------------------------
// Aluno: Beatriz
// Curso: Química
// Nota: 9.0
// -------------------------------

// =============================================================
// 🔹 Usando `for...of` com Objetos Iteráveis
// =============================================================

// Exemplo com Object.keys() para iterar sobre as chaves de um objeto
for (let chave of Object.keys(carro)) {
    console.log(chave);  // Exibe as chaves do objeto
}

// Saída esperada:
// modelo
// ano
// cor
