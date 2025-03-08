// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex016 - Verificação de Curto-Circuito em JavaScript
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 Curto-Circuito (Short-Circuit) em JavaScript

    Ocorre quando o JS não avalia a 2ª parte de uma expressão lógica porque o resultado já é determinado pela 1ª parte.
        ⮡ Isso acontece nos operadores lógicos AND (&&) e OR (||)
        ⮡ Útil para evitar a execução de funções que não são necessárias
        ⮡ Ou verificar se uma condição já é suficiente para uma decisão
*/

// =============================================================
// 🔹 Curto-Circuito com AND (&&)
// =============================================================

// O operador AND (&&) vai retornar `true` apenas se ambas as expressões forem verdadeiras. Se a primeira for `false`, ele **não** precisa avaliar a segunda

let a = false;
let b = true;

console.log("a && b:", a && b); 

// Exemplo de curto-circuito com AND
let x = 0;  // Valor "falsy"
let y = 10;

console.log("x && y:", x && y);  // 0, porque x é falsy e não avalia y

// Exemplo com valor "truthy"
let z = 5;  // Valor "truthy"
let w = 10;

console.log("z && w:", z && w);  // 10, porque z é truthy, então avalia w e retorna w

// =============================================================
// 🔹 Curto-Circuito com OR (||)
// =============================================================

// O operador OR (||) vai retornar `true` se pelo menos uma das expressões for `true`. Se a primeira for `true`, ele **não** precisa avaliar a segunda

let p = true;
let q = false;

console.log("p || q:", p || q);  // true, porque p é true, não precisa verificar q

// Exemplo de curto-circuito com OR
let m = 5;  // Valor "truthy"
let n = 0;

console.log("m || n:", m || n);  // 5, porque m é truthy e não avalia n

// Exemplo com valor "falsy"
let a1 = false;  // Valor "falsy"
let b1 = 10;


console.log("a1 || b1:", a1 || b1);  // 10, porque a1 é falsy, então avalia b1 e retorna b1

// =============================================================
// 🔹 Curto-Circuito com Funções
// =============================================================

// Curto-circuito pode ser útil para evitar a execução de funções que não são necessárias

// Exemplo com AND (&&) - A segunda função não é chamada, pois a primeira é falsy
function primeiraFuncao() {
    console.log("Primeira função chamada");
    return false;  // Retorna false, vai impedir a chamada da segunda função
}

function segundaFuncao() {
    console.log("Segunda função chamada");
}

primeiraFuncao() && segundaFuncao();  // Segunda função não será chamada porque a primeira retornou false

// Exemplo com OR (||) - A segunda função será chamada, pois a primeira retorna falsy
function terceiraFuncao() {
    console.log("Terceira função chamada");
    return false;  // Retorna false, mas a segunda função ainda é chamada
}

function quartaFuncao() {
    console.log("Quarta função chamada");
}

terceiraFuncao() || quartaFuncao();  // Quarta função será chamada, porque a terceira retornou false

// =============================================================
// 🔹 Exemplo Prático com Curto-Circuito
// =============================================================

// Verificando se uma variável é válida antes de chamar uma função
let usuario = {
    nome: "Isabelli",
    idade: 25,
};

// Só chama a função se o nome do usuário for válido
usuario.nome && console.log("Nome do usuário:", usuario.nome);  // Exibe o nome porque a condição é truthy

// Se a variável nome não existir (falsy), a função não será chamada
usuario.nome = null;
usuario.nome && console.log("Nome do usuário:", usuario.nome);  // Não exibe nada, porque o nome é falsy
