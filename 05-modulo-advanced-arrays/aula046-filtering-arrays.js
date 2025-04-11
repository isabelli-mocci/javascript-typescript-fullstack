// =============================================================
// Curso de JavaScript e TypeScript - Aula 46: Filter Method
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 11/04/2025
// =============================================================

/*
    🔹 Filter() Method

      → cria um novo array com elementos que passam em um teste (função callback).
      → não modifica o array original.
      → retorna um array com os elementos que retornam `true` no teste.
      → se nenhum elemento passar, retorna um array vazio.

    🔹 Sintaxe:

      const novoArray = array.filter(function(elemento, índice, array) {
        return condição; // true = mantém | false = remove
      });
*/

// =============================================================
//   🔹 Exemplo 1
// =============================================================

const personagens = [
  { nome: 'Aelin', magia: true },
  { nome: 'Chaol', magia: false },
  { nome: 'Rowan', magia: true },
  { nome: 'Manon', magia: true },
];

const comMagia = personagens.filter(p => p.magia);
console.log(comMagia); 
/* Saída:
[
  { nome: 'Aelin', magia: true },
  { nome: 'Rowan', magia: true },
  { nome: 'Manon', magia: true }
]*/

// =============================================================
//   🔹 Exemplo 2
// =============================================================

const arsenal = [
  { nome: 'Damaris', tipo: 'lendária' },
  { nome: 'Adaga', tipo: 'comum' },
  { nome: 'Goldryn', tipo: 'lendária' },
];

const armasLendarias = arsenal.filter(item => item.tipo === 'lendária');
console.log(armasLendarias);
/* Saída:
[
  { nome: 'Damaris', tipo: 'lendária' },
  { nome: 'Goldryn', tipo: 'lendária' }
]*/

// =============================================================
//   🔹 Exemplo 3
// =============================================================

const corteDosSonhos = ['Feyre', 'Rhysand', 'Cassian', 'Azriel', 'Nesta', 'Elain'];

const nomesComA = corteDosSonhos.filter(nome => nome.startsWith('A'));
console.log(nomesComA); // Saída: ['Azriel']

// =============================================================
//   🔹 Exemplo 4
// =============================================================

const feericos = ['Lucien', 'Tamlin', 'Helion'];

const filtrados = feericos.filter(nome => nome.length > 10);
console.log(filtrados); // Saída: []

// =============================================================