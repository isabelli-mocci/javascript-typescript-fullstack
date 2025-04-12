// =============================================================
// Curso de JavaScript e TypeScript - Aula 45: Concatenando Arrays
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 11/04/2025
// =============================================================

/*
    🔹 Concatenando Arrays

      → Concatenar = unir arrays ou valores em um novo array.
      → O método `concat()` NÃO altera os arrays originais.
      → Retorna um NOVO array com os itens combinados.

      - `concat()` aceita arrays ou valores únicos.
      - Pode ser substituído pelo spread operator (...)

*/

// =============================================================
//   🔹 Exemplo Clássico com concat()
// =============================================================

const corteNoturna = ['Rhysand', 'Cassian'];
const corteLuzEstelar = ['Azriel'];
const feiticeiras = ['Amren'];

const corteFeyre = corteNoturna.concat(corteLuzEstelar, feiticeiras);
console.log(corteFeyre); 
console.log(corteNoturna); 

// =============================================================
//   🔹 Concatenando valores únicos
// =============================================================

const arsenal = ['Damaris', 'Goldryn'];
const novoArsenal = arsenal.concat('Fogo', 'Magia');
console.log(novoArsenal); 

// =============================================================
//   🔹 Spread Operator para concatenar
// =============================================================

const assassina = ['Celaena', 'Aelin'];
const gatos = ['Rowan', 'Dorian'];

const elite = [...assassina, ...gatos];
console.log(elite); 

const theBests = ['Fenrys', ...assassina, 'Manon'];
console.log(theBests);

// =============================================================