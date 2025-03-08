// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex013 - Diferença de Valor por Referência e Valor Primitivo
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 O que são valores primitivos e valores por referência?

    - **Valores primitivos** são tipos de dados que armazenam o valor diretamente, como números, strings, booleanos, `null`, `undefined`, etc.
    - **Valores por referência** são tipos de dados que armazenam a referência (ou endereço de memória) de um valor, como objetos, arrays, e funções.
    - A principal diferença é como os dados são copiados quando você os atribui a outra variável.
*/

// =============================================================
// 🔹 Exemplos de Tipos Primitivos
// =============================================================

/*
    Tipos primitivos armazenam o valor diretamente. 
    Isso significa que, quando você copia uma variável primitiva para outra, a cópia é independente da original.
*/

let num1 = 10;
let num2 = num1;  // Copiando o valor de num1 para num2
console.log("num1:", num1);  // Exibe: 10
console.log("num2:", num2);  // Exibe: 10

num2 = 20;  // Modificando o valor de num2
console.log("num1 após modificar num2:", num1);  // Exibe: 10
console.log("num2 após modificação:", num2);  // Exibe: 20

// Note que, quando alteramos num2, o valor de num1 não foi afetado, pois eles armazenam valores independentes.

// =============================================================
// 🔹 Exemplos de Tipos por Referência
// =============================================================

/*
    Objetos, arrays e funções são exemplos de tipos por referência. 
    Isso significa que, quando você copia uma variável que contém um objeto ou array para outra, as duas variáveis apontam para o mesmo objeto/array na memória.
*/

let pessoa1 = { nome: "Isabelli", idade: 25 };
let pessoa2 = pessoa1;  // Copiando a referência de pessoa1 para pessoa2
console.log("pessoa1:", pessoa1);  // Exibe: { nome: "Isabelli", idade: 25 }
console.log("pessoa2:", pessoa2);  // Exibe: { nome: "Isabelli", idade: 25 }

pessoa2.idade = 26;  // Modificando a propriedade do objeto através de pessoa2
console.log("pessoa1 após modificar pessoa2:", pessoa1);  // Exibe: { nome: "Isabelli", idade: 26 }
console.log("pessoa2 após modificação:", pessoa2);  // Exibe: { nome: "Isabelli", idade: 26 }

console.log("As variáveis pessoa1 e pessoa2 estão apontando para o mesmo objeto.");
// Aqui, ao modificar pessoa2, o valor de pessoa1 também foi alterado, pois ambas apontam para o mesmo objeto.

// =============================================================
// 🔹 Diferença de Comportamento entre Tipos Primitivos e Tipos por Referência
// =============================================================

// Tipos primitivos são passados por **valor**, ou seja, cada variável tem sua própria cópia.
let a = 5;
let b = a;  // Passando valor de a para b
b = 10;  // Modificando b
console.log("a:", a);  // Exibe: 5
console.log("b:", b);  // Exibe: 10

// Tipos por referência são passados por **referência**, ou seja, a variável armazena o endereço de memória do valor.
let obj1 = { chave: "valor" };
let obj2 = obj1;  // Passando referência de obj1 para obj2
obj2.chave = "novo valor";  // Modificando o valor do objeto
console.log("obj1:", obj1);  // Exibe: { chave: "novo valor" }
console.log("obj2:", obj2);  // Exibe: { chave: "novo valor" }

// Ambas as variáveis, obj1 e obj2, apontam para o mesmo objeto, então uma modificação afeta ambos.

// =============================================================
// 🔹 Copiando Objetos ou Arrays (Quando você não quer afetar o original)
// =============================================================

/*
    Se você quer fazer uma cópia "independente" de um objeto ou array (sem afetar o original), você precisa copiar o valor, não a referência.
*/

// Copiando arrays
let frutas1 = ["Maçã", "Banana", "Morango"];
let frutas2 = [...frutas1];  // Usando spread para criar uma nova cópia
frutas2[0] = "Uva";  // Alterando o primeiro valor de frutas2
console.log("frutas1:", frutas1);  // Exibe: ["Maçã", "Banana", "Morango"]
console.log("frutas2:", frutas2);  // Exibe: ["Uva", "Banana", "Morango"]

// Copiando objetos
let pessoaOriginal = { nome: "Matheus", idade: 30 };
let pessoaCopia = { ...pessoaOriginal };  // Usando spread para criar uma nova cópia
pessoaCopia.idade = 31;  // Alterando a idade da cópia
console.log("pessoaOriginal:", pessoaOriginal);  // Exibe: { nome: "Matheus", idade: 30 }
console.log("pessoaCopia:", pessoaCopia);  // Exibe: { nome: "Matheus", idade: 31 }

// Nesse caso, a alteração em pessoaCopia não afeta pessoaOriginal, pois agora são objetos independentes.

// =============================================================
// 🔹 Conclusão
// =============================================================

/*
    - **Valores primitivos**: São copiados por **valor**. Modificar a cópia não afeta o valor original.
    - **Valores por referência**: São copiados por **referência**. Modificar a cópia afeta o valor original, pois ambos apontam para o mesmo valor na memória.

    Para evitar problemas ao manipular objetos ou arrays, use técnicas como **spread** ou **Object.assign()** para criar cópias independentes.
*/

