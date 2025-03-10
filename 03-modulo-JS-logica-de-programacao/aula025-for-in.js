// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex025 - Laço de Repetição "for...in"
// Isabelli Cristina Mocci - 09/03/2025
// =============================================================

/*
    🔹 Laço de Repetição `for...in`:
    
    - O `for...in` é usado para iterar sobre as **propriedades enumeráveis** de um objeto ou os **índices** de um array.
    - Diferente do `for`, que é mais utilizado para iterar sobre arrays e listas, o `for...in` foca em objetos, permitindo acessar suas chaves (ou índices de arrays) diretamente.
    - Ele vai passar por **todas as propriedades enumeráveis** do objeto, incluindo as herdadas.

    ⚠️ Importante: O `for...in` não é ideal para iterar sobre arrays, pois ele pode não garantir a ordem de iteração dos índices (use o `for...of` ou `for` clássico para isso).
*/

// =============================================================
// 🔹 Exemplo de `for...in` com Objetos
// =============================================================

// Definindo um objeto com algumas propriedades
const pessoa = {
    nome: "Isabelli",
    idade: 25,
    profissão: "Desenvolvedora Web",
    cidade: "São José do Rio Preto"
};

// Iterando sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(chave);  // Exibe o nome da chave
    console.log(pessoa[chave]);  // Exibe o valor da chave
}

// Saída esperada:
// nome
// Isabelli
// idade
// 25
// profissão
// Desenvolvedora Web
// cidade
// São José do Rio Preto

// =============================================================
// 🔹 Exemplo de `for...in` com Arrays
// =============================================================

// Definindo um array
const frutas = ["Maçã", "Banana", "Laranja", "Manga"];

// Iterando sobre os índices do array
for (let indice in frutas) {
    console.log(indice);  // Exibe o índice do array
    console.log(frutas[indice]);  // Exibe o valor do índice no array
}

// Saída esperada:
// 0
// Maçã
// 1
// Banana
// 2
// Laranja
// 3
// Manga

// =============================================================
// 🔹 `for...in` com Arrays e Objetos Complexos
// =============================================================

// Definindo um array de objetos
const estudantes = [
    { nome: "Ana", idade: 22 },
    { nome: "Carlos", idade: 23 },
    { nome: "Beatriz", idade: 21 }
];

// Iterando sobre o array de objetos
for (let indice in estudantes) {
    console.log(`Estudante ${parseInt(indice) + 1}:`);
    for (let chave in estudantes[indice]) {
        console.log(`${chave}: ${estudantes[indice][chave]}`);
    }
    console.log("-----------------------------");
}

// Saída esperada:
// Estudante 1:
// nome: Ana
// idade: 22
// -----------------------------
// Estudante 2:
// nome: Carlos
// idade: 23
// -----------------------------
// Estudante 3:
// nome: Beatriz
// idade: 21
// -----------------------------

// =============================================================
// 🔹 Evitando Iterar Propriedades Herdadas
// =============================================================

// Criando um objeto com uma propriedade herdada
const animal = { tipo: "Cachorro" };

// Definindo um objeto com um prototype
const cachorro = Object.create(animal);
cachorro.nome = "Rex";
cachorro.idade = 5;

// Iterando sobre o objeto
for (let chave in cachorro) {
    if (cachorro.hasOwnProperty(chave)) {  // Garantindo que estamos acessando apenas as propriedades próprias
        console.log(chave + ": " + cachorro[chave]);
    }
}

// Saída esperada:
// nome: Rex
// idade: 5

// =============================================================
// 🔹 Comparando `for...in` com `for...of`
// =============================================================

// A principal diferença entre `for...in` e `for...of` é que o `for...in` itera sobre **propriedades** de objetos ou índices de arrays,
// enquanto o `for...of` itera sobre os **valores** de um array.

// Exemplo com `for...in` (sobre índices de um array):
for (let indice in frutas) {
    console.log(indice);  // Índices do array
}

// Exemplo com `for...of` (sobre valores do array):
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
// 🔹 Usando `for...in` com Objetos e Arrays Multidimensionais
// =============================================================

// Exemplo de um array multidimensional (array de arrays)
const matriculas = [
    ["Ana", "Matemática", 7.8],
    ["Carlos", "Física", 8.2],
    ["Beatriz", "Química", 9.0]
];

// Iterando sobre um array multidimensional com `for...in`
for (let i in matriculas) {
    console.log(`Aluno ${parseInt(i) + 1}:`);
    for (let j in matriculas[i]) {
        console.log(matriculas[i][j]);
    }
    console.log("-------------------------------");
}

// Saída esperada:
// Aluno 1:
// Ana
// Matemática
// 7.8
// -------------------------------
// Aluno 2:
// Carlos
// Física
// 8.2
// -------------------------------
// Aluno 3:
// Beatriz
// Química
// 9.0
// -------------------------------