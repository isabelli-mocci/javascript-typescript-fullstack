// =============================================================
// Curso de JavaScript e TypeScript - Aula 49: map + filter + reduce
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 11/04/2025
// =============================================================

/*
    🔹 Combinando os Métodos: map() + filter() + reduce()

    → map(): transforma cada item
    → filter(): filtra itens com base em uma condição
    → reduce(): condensa tudo em um único valor final

    🔹 Por que usar juntos?
      - Processos complexos em etapas (ex: filtrar → transformar → somar)
      - Código limpo, funcional e poderoso
      - Evita laços `for` complicados

    🔹 Ordem recomendada:
      1. filter()
      2. map()
      3. reduce()

*/

// =============================================================
//   🔹 Exemplo 1
// =============================================================

const personagens = [
  { nome: 'Aelin', casa: 'Terrasen', poder: 90 },
  { nome: 'Manon', casa: 'Clã Blackbeak', poder: 95 },
  { nome: 'Dorian', casa: 'Adarlan', poder: 85 },
  { nome: 'Aedion', casa: 'Wendlyn', poder: 70 },
  { nome: 'Rowan', casa: 'Terrasen', poder: 98 }
];

// Objetivo: Somar o poder total dos personagens da casa Terrasen com poder acima de 75

const poderTerrasen = personagens
  .filter(p => p.casa === 'Terrasen' && p.poder > 75) 
  .map(p => p.poder)
  .reduce((total, poder) => total + poder, 0);

console.log(poderTerrasen); // Saída: 188 (90 + 98)

// =============================================================
//   🔹 Exemplo 2
// =============================================================

const inventario = [
  { item: 'Chave de Wyrd', raro: true, valor: 500 },
  { item: 'Mapa de Velaris', raro: false, valor: 50 },
  { item: 'Espada Goldryn', raro: true, valor: 300 },
  { item: 'Poção Curativa', raro: false, valor: 20 }
];

// Objetivo: calcular o valor total dos itens raros no inventário

const totalRaro = inventario
  .filter(i => i.raro) // filtra os itens raros        
  .map(i => i.valor) // transforma o array de obj em array de valores
  .reduce((acc, val) => acc + val, 0); // reduz o array de valores em um único valor total

console.log(totalRaro); // Saída: 800

// =============================================================
