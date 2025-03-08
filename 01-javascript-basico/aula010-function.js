// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex010 - Functions (Básico)
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/**
 * Retorna uma saudação personalizada.
 *
 * @param {string} nome - O nome da pessoa a ser saudada.
 * @returns {string} - Uma mensagem de saudação no formato "Bom dia, Nome!".
 *
 * @example
 * const mensagem = saudacao("Isa");
 * console.log(mensagem); // "Bom dia, Isa!"
 */

function saudacao(nome) {
  return `Bom dia, ${nome}!`;
}

const mensagem = saudacao("Isa"); // Chama a função e armazena o retorno
console.log(mensagem); // Exibe: "Bom dia, Isa!"

// =============================================================

/**
 * Retorna a soma de dois números.
 *
 * @param {number} x - O primeiro número.
 * @param {number} y - O segundo número.
 * @returns {number} - A soma de x e y.
 *
 * @example
 * console.log(soma(10, 2)); // 12
 */

function soma(x, y) {
  return x + y;
}

console.log(soma(10, 2)); // Exibe: 12

// =============================================================

/**
 * Calcula a raiz quadrada de um número.
 *
 * @param {number} numero - O número que terá sua raiz quadrada calculada.
 * @returns {number} - O valor da raiz quadrada do número fornecido.
 *
 * @example
 * console.log(raizQuadrada(9)); // 3
 * console.log(raizQuadrada(16)); // 4
 */

const raizQuadrada = function (numero) {
  return Math.sqrt(numero); // Método JS que calcula a raizQ
};

console.log(raizQuadrada(9)); // Exibe: 3
console.log(raizQuadrada(16)); // Exibe: 4

// Funções acima usando Arrow Function (=>)

const saudando = (nome) => `Bom dia, ${nome}!`;
const somar = (x, y) => x + y;
const raizQ = (num) => Math.sqrt(num);

console.log(saudando("Isa"), somar(10, 2), raizQ(9), raizQ(16));

// =============================================================

// Função que cria uma pessoa com nome, sobrenome e idade
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

// Criando 5 pessoas usando a função
const pessoa1 = criaPessoa("Isa", "Mocci", 25);
const pessoa2 = criaPessoa("Amanda", "Albuquerque", 69);
const pessoa3 = criaPessoa("Maria", "Oliveira", 54);
const pessoa4 = criaPessoa("Carla", "Santos", 15);
const pessoa5 = criaPessoa("Gabi", "Ortiz", 32);

// Exibindo as pessoas
console.log(pessoa1); // Exibe: { nome: 'Isa', sobrenome: 'Mocci', idade: 25 }
console.log(pessoa2); // Exibe: { nome: 'Amanda', sobrenome: 'Albuquerque', idade: 69 }

// Acessando propriedades de um objeto
console.log(pessoa1.nome); // Exibe: "Isa"
console.log(pessoa3.idade); // Exibe: 54
console.log(pessoa4.sobrenome); // Exibe: "Santos"

