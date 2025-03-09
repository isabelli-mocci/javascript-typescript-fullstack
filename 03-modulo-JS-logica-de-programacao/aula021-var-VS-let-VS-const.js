// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex021 - Diferenças entre "var", "let" e "const"
// Isabelli Cristina Mocci - 08/03/2025
// =============================================================

/*
    🔹 "var", "let" e "const" são três formas de declarar variáveis em JavaScript. Cada um tem características diferentes, especialmente em relação ao escopo e mutabilidade.

    - `var`: 
        ⮡ Declara variáveis com escopo de função ou global.
        ⮡ Pode ser redeclarado e atualizado.
        ⮡ Tem o comportamento de *hoisting* (i.e., é "levantado" para o topo do escopo de execução).
    
    - `let`: 
        ⮡ Declara variáveis com escopo de bloco.
        ⮡ Pode ser atualizado, mas não redeclarado dentro do mesmo escopo.
        ⮡ Não sofre *hoisting* como o `var`, mas o valor é temporariamente "hoisted" para o bloco.
    
    - `const`: 
        ⮡ Declara variáveis com escopo de bloco.
        ⮡ Deve ser inicializada com um valor e não pode ser reatribuída depois.
        ⮡ Pode ser usada para declarar objetos ou arrays, mas o conteúdo interno pode ser alterado.
*/

// =============================================================
// 🔹 Exemplo com "var"
// =============================================================

// Declarando com var:
var numeroVar = 10;
console.log("Número (var):", numeroVar);

// Redeclarando com var (permitido):
var numeroVar = 20;
console.log("Número após redeclaração (var):", numeroVar);

// "Hoisting" com var - A variável é elevada para o topo do escopo:
console.log("Número antes de ser declarado (var):", numeroVar);
var numeroVar = 30; // Mesmo sendo declarada depois, o valor aparece no console

// =============================================================
// 🔹 Exemplo com "let"
// =============================================================

// Declarando com let:
let numeroLet = 10;
console.log("Número (let):", numeroLet);

// Tentando redeclarar com let (erro):
// let numeroLet = 20; // Uncaught SyntaxError: Identifier 'numeroLet' has already been declared

// Atualizando o valor com let (permitido):
numeroLet = 20;
console.log("Número após atualização (let):", numeroLet);

// Escopo de bloco com let:
if (true) {
    let numeroLetBloco = 30;
    console.log("Número dentro do bloco (let):", numeroLetBloco);
}
// console.log("Número fora do bloco (let):", numeroLetBloco); // ReferenceError: numeroLetBloco is not defined

// =============================================================
// 🔹 Exemplo com "const"
// =============================================================

// Declarando com const:
const numeroConst = 10;
console.log("Número (const):", numeroConst);

// Tentando reatribuir com const (erro):
// numeroConst = 20; // Uncaught TypeError: Assignment to constant variable.

// Escopo de bloco com const:
if (true) {
    const numeroConstBloco = 30;
    console.log("Número dentro do bloco (const):", numeroConstBloco);
}
// console.log("Número fora do bloco (const):", numeroConstBloco); // ReferenceError: numeroConstBloco is not defined

// =============================================================
// 🔹 Diferença entre "const" e "let" para Objetos/Arrays
// =============================================================

// Constante com objeto:
const pessoa = {
    nome: "Isabelli",
    idade: 25
};
console.log("Pessoa inicial:", pessoa);

// Modificando o conteúdo de um objeto constante (permitido):
pessoa.idade = 26;
console.log("Pessoa após modificação:", pessoa);

// Tentando redeclarar o objeto constante (erro):
// pessoa = { nome: "Matheus", idade: 30 }; // Uncaught TypeError: Assignment to constant variable.

// Constante com array:
const numeros = [1, 2, 3];
console.log("Array inicial:", numeros);

// Modificando o conteúdo do array constante (permitido):
numeros.push(4);
console.log("Array após modificação:", numeros);

// Tentando redeclarar o array constante (erro):
// numeros = [5, 6, 7]; // Uncaught TypeError: Assignment to constant variable.

// =============================================================
// 🔹 Comparação entre var, let e const
// =============================================================

console.log("Comparação entre var, let e const:");

const comparacao = (tipo) => {
    switch (tipo) {
        case "var":
            console.log("Escopo de var: função ou global, com hoisting e re-declaração permitida.");
            break;
        case "let":
            console.log("Escopo de let: bloco, sem hoisting e re-declaração não permitida.");
            break;
        case "const":
            console.log("Escopo de const: bloco, não pode ser reatribuído, mas pode ser mutado (se objeto ou array).");
            break;
        default:
            console.log("Escolha 'var', 'let' ou 'const' para comparar.");
    }
};

// Teste da função comparativa
comparacao("var");
comparacao("let");
comparacao("const");

// =============================================================
// 🔹 Exemplos Finais
// =============================================================

// Utilizando var, let e const em um exemplo prático:
function exemplo() {
    var a = 1;
    let b = 2;
    const c = 3;

    if (true) {
        var a = 10; // var permite reatribuição no mesmo escopo
        let b = 20; // let cria uma nova variável no bloco
        // const c = 30; // Erro: redeclaração não permitida com const
    }

    console.log("Valor de a (var):", a); // 10
    console.log("Valor de b (let):", b); // 2 (não foi alterado no bloco)
    console.log("Valor de c (const):", c); // 3 (não foi alterado)
}

// Chama a função de exemplo
exemplo();
