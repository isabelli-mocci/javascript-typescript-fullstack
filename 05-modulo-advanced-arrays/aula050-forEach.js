// =============================================================
// Curso de JavaScript e TypeScript - Aula 50: forEach()
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 10/04/2025
// =============================================================

/*
    🔹 forEach()

      → usado para percorrer arrays
      → executa uma função callback para cada item do array
      → não retorna nada (undefined)
      → NÃO cria um novo array nem altera o original

    🔹 Sintaxe:
        array.forEach(function(elemento, índice, array) {
          
        });

    ⚠️ Diferente do map(), que retorna um novo array.
*/

// =============================================================
//   🔹 Exemplo 1
// =============================================================

const corteNoturna = ['Rhysand', 'Cassian', 'Azriel'];

corteNoturna.forEach((guerreiro, index) => {
  console.log(`O ${index + 1}º guerreiro é ${guerreiro} 🌌`);
});

/* Saída:
O 1º guerreiro é Rhysand 🌌
O 2º guerreiro é Cassian 🌌
O 3º guerreiro é Azriel 🌌
*/

// =============================================================
//   🔹 Exemplo 2
// =============================================================

const poderes = [10, 20, 30];

poderes.forEach((valor, i, array) => {
  array[i] = valor * 2;
});

console.log(poderes); // Saída: [20, 40, 60]

// =============================================================
//   🔹 Exemplo 2
// =============================================================

const arsenal = [
  { item: 'Goldryn', tipo: 'Espada' },
  { item: 'Chamas de Mala', tipo: 'Magia' },
  { item: 'Damaris', tipo: 'Espada' }
];

arsenal.forEach(arma => {
  console.log(`${arma.item} é uma ${arma.tipo}`);
});

/* Saída:
Goldryn é uma Espada
Chamas de Mala é uma Magia
Damaris é uma Espada
*/

// =============================================================
// 🔹 Arrays Multidimensionais
// =============================================================

const mapa = [
  ['🌲', '🌲', '🏰'], // Linha 0
  ['🌊', '🔥', '👾']  // Linha 1
];

// Acessando a posição [1][2]:
console.log(mapa[1][2]); // 👾 Monstro final!

// =============================================================