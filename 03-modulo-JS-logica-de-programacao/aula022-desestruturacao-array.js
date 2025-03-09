// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex022 - Atribuição via Desestruturação (Arrays)
// Isabelli Cristina Mocci - 08/03/2025
// =============================================================

/*
    🔹 Desestruturação de Arrays:
    
    - A desestruturação é uma maneira prática de extrair valores de arrays ou objetos e armazená-los em variáveis.
    - No caso de arrays, podemos desestruturar os elementos com base na posição deles no array.
    
    - ⚠️ A desestruturação é feita pela ordem dos elementos no array, ou seja, o primeiro valor vai para a primeira variável, o segundo para a segunda, e assim por diante.
*/

// =============================================================
// 🔹 Exemplo Básico de Desestruturação de Arrays
// =============================================================

// Definindo um array:
const numeros = [10, 20, 30, 40, 50];

// Desestruturando os elementos do array:
const [a, b, c] = numeros;
console.log("Primeiro valor (a):", a);  // 10
console.log("Segundo valor (b):", b);   // 20
console.log("Terceiro valor (c):", c);  // 30

// =============================================================
// 🔹 Pulando Elementos com Desestruturação
// =============================================================

// Podemos pular elementos do array, não atribuindo eles a variáveis:
const [x, , z] = numeros; // Ignorando o segundo valor (20)
console.log("Primeiro valor (x):", x);  // 10
console.log("Terceiro valor (z):", z);  // 30

// =============================================================
// 🔹 Atribuindo Rest Elements (Rest Operator)
// =============================================================

// Podemos usar o operador "rest" (`...`) para capturar o restante dos elementos do array:
const [primeiro, segundo, ...resto] = numeros;
console.log("Primeiro valor (primeiro):", primeiro);   // 10
console.log("Segundo valor (segundo):", segundo);      // 20
console.log("Restante dos valores (resto):", resto);   // [30, 40, 50]

// =============================================================
// 🔹 Troca de Valores via Desestruturação
// =============================================================

// A desestruturação também pode ser usada para trocar valores entre variáveis:
let um = 1, dois = 2;
console.log("Antes da troca: um =", um, ", dois =", dois);

// Troca de valores com desestruturação:
[um, dois] = [dois, um];
console.log("Após a troca: um =", um, ", dois =", dois);

// =============================================================
// 🔹 Desestruturação com Arrays Multidimensionais
// =============================================================

// Podemos desestruturar arrays multidimensionais (arrays dentro de arrays):
const matriz = [[1, 2], [3, 4], [5, 6]];

// Desestruturando uma matriz:
const [[a1, b1], [a2, b2]] = matriz;
console.log("Primeiro par (a1, b1):", a1, b1);  // 1 2
console.log("Segundo par (a2, b2):", a2, b2);   // 3 4

// =============================================================
// 🔹 Usando Desestruturação em Funções
// =============================================================

// Podemos desestruturar arrays diretamente em funções:
function soma([num1, num2]) {
    return num1 + num2;
}

const resultado = soma([5, 10]);
console.log("Resultado da soma:", resultado); // 15

// =============================================================
// 🔹 Desestruturação com Valor Padrão
// =============================================================

// Podemos atribuir valores padrão caso o array não tenha um valor para uma variável:
const [d, e = 10] = [5];
console.log("Valor de d:", d);  // 5
console.log("Valor de e:", e);  // 10 (valor padrão)

// =============================================================
// 🔹 Exemplo Completo com Vários Conceitos
// =============================================================

// Definindo um array de dados:
const dados = ["Isabelli", 26, "Programadora", "Brasil"];

// Desestruturando o array e atribuindo valores padrão:
const [nome, idade, profissao, pais = "Desconhecido"] = dados;
console.log("Nome:", nome);           // Isabelli
console.log("Idade:", idade);         // 26
console.log("Profissão:", profissao); // Programadora
console.log("País:", pais);           // Brasil

// =============================================================
// 🔹 Desestruturação com Spread Operator
// =============================================================

// O Spread Operator pode ser usado para desestruturar elementos, distribuindo-os em novas variáveis:
const [un, ...outros] = [1, 2, 3, 4, 5];
console.log("Primeiro valor (um):", un);   // 1
console.log("Restante dos valores (outros):", outros); // [2, 3, 4, 5]
