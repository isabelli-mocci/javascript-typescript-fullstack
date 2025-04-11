// =============================================================
// Curso de JavaScript e TypeScript - Aula 47: Map Method
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 11/04/2025
// =============================================================
/*
    🔹 Map() Method

      → cria um novo array com o resultado da transformação de cada item do array original.
      → não modifica o array original.
      → retorna um novo array com a MESMA quantidade de elementos.
      → se nenhum elemento passar, retorna um array vazio.

    🔹 Sintaxe:

      const novoArray = array.map(function(elemento, índice, array) {
        return novoElemento;
      });
*/

// =============================================================
//   🔹 Exemplo 1
// =============================================================

const personagens = ['Aelin', 'Lyssandra', 'Manon', 'Cealena'];

const comTitulos = personagens.map(nome => `Lady ${nome}`);
console.log(comTitulos); 
/* Saída:
[ 'Lady Aelin', 'Lady Lyssandra', 'Lady Manon', 'Lady Cealena' ]
*/

// =============================================================
//   🔹 Exemplo 2
// =============================================================

const poderes = [40, 85, 70];

const nivelMagia = poderes.map(p => p >= 80 ? '🔥 Supremo' : '✨ Médio');
console.log(nivelMagia); 
/* Saída:
[ '✨ Médio', '🔥 Supremo', '✨ Médio' ]
*/

// =============================================================
//   🔹 Exemplo 3
// =============================================================

const guerreiros = [
  { nome: 'Cassian', poder: 90 },
  { nome: 'Azriel', poder: 95 },
  { nome: 'Lucien', poder: 70 },
];

const status = guerreiros.map(p => ({
  ...p,
  status: p.poder >= 90 ? 'Elite da Corte' : 'Em treinamento',
}));

console.log(status);
/* Saída:
[
  { nome: 'Cassian', poder: 90, status: 'Elite da Corte' },
  { nome: 'Azriel', poder: 95, status: 'Elite da Corte' },
  { nome: 'Lucien', poder: 70, status: 'Em treinamento' }
]
*/

// =============================================================
//   🔹 Exemplo 4
// =============================================================

const nomes = ['Feyre', 'Nesta', 'Elain'];

const links = nomes.map(nome => `https://bellicode.dev/personagens/${nome.toLowerCase()}`);
console.log(links);
/* Saída:
[
  'https://bellicode.dev/personagens/feyre',
  'https://bellicode.dev/personagens/nesta',
  'https://bellicode.dev/personagens/elain'
]
*/

// =============================================================