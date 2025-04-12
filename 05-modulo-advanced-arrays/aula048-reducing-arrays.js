// =============================================================
// Curso de JavaScript e TypeScript - Aula 48: Reduce Method
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 11/04/2025
// =============================================================

/*
    🔹 Reduce() Method

      → executa uma função e reduz o array a um único valor
      → retorna um único valor (não um array)
      → não modifica o array original
      → sempre definir valorInicial para evitar erros

    🔹 Sintaxe:

      const novoArray = array.reduce((acumulador, elemento, índice, array) => {
        return novoAcumulador;
      }, valorInicial);

*/

// =============================================================
//   🔹 Exemplo 1
// =============================================================

const guerreiras = [
  { nome: 'Aelin', poder: 90 },
  { nome: 'Manon', poder: 95 },
  { nome: 'Elide', poder: 70 }
];

const poderTotal = guerreiras.reduce((total, guerreira) => {
  return total + guerreira.poder;
}, 0);

console.log(poderTotal); // Saída: 255

// =============================================================
//   🔹 Exemplo 2
// =============================================================

const grimorios = [
  ['Wyrdmarks', 'Poção da Visão'],
  ['Chave de Wyrd'],
  ['Mapa de Terrasen', 'Fogo Feérico']
];

const grimorioUnico = grimorios.reduce((todos, grimorio) => {
  return todos.concat(grimorio);
}, []);

console.log(grimorioUnico); 

/* Saída:
[
  'Wyrdmarks',
  'Poção da Visão',
  'Chave de Wyrd',
  'Mapa de Terrasen',
  'Fogo Feérico'
]*/

// =============================================================
//   🔹 Exemplo 3
// =============================================================

const personagens = ['Aelin Galathynius', 'Dorian Havilliard', 'Rowan Whitethorn', 'Lysandra'];

const nobres = personagens.reduce((contador, nome) => {
  return nome.includes(' ') ? contador + 1 : contador;
}, 0);

console.log(nobres); // Saída: 3

// =============================================================
//   🔹 Exemplo 4
// =============================================================

const grupo = ['Feyre', 'Rhysand', 'Mor'];

const frase = grupo.reduce((acc, nome, i, arr) => {
  return acc + (i === arr.length - 1 ? `e ${nome}` : `${nome}, `);
}, 'Integrantes da Corte Noturna: ');

console.log(frase);

// Saída: Integrantes da Corte Noturna: Feyre, Rhysand e Mor

// =============================================================
