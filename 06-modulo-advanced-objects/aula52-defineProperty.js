// =============================================================
// Curso de JavaScript e TypeScript - Aula 53: defineProperty
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 28/04/2025
// =============================================================

/*
    🔹 Object.defineProperty() e Object.defineProperties()

      São métodos que permitem modificar as propriedades de objetos.

    🔹 Sintaxe:

      → 1️⃣ `Object.defineProperty(objeto, propriedade, configuracao)`
      → 2️⃣ `Object.defineProperties(objeto, { propriedade1: configuracao1, propriedade2: configuracao2 })`

    🔹 Parâmetros:

      → `objeto`        ▶  objeto que será modificado.
      → `propriedade`   ▶  propriedade que será criada/alterada.
      → `configuracao`  ▶  um objeto que define as configurações da propriedade.
      → `propriedade1`, `propriedade2`    ▶  propriedades a serem criadas/alteradas.
      → `configuracao1`, `configuracao2`  ▶  configurações específicas para cada propriedade.

    🔹 Configurações:

      - `value`: valor da propriedade
      - `writable`: propriedade protegida     →  não altera o valor
      - `enumerable`: propriedade invisível   →  não aparece em loops
      - `configurable`: propriedade imutável  →  não pode ser deletada ou configurada

*/

// =============================================================
//   🔹 Exemplo 1: Object.defineProperty()
// =============================================================

const artefatoMisterioso = {};

Object.defineProperty(artefatoMisterioso, 'nome', {
  value: 'Coroa de Prata',
  writable: false,        
  enumerable: true,       
  configurable: false     
});

console.log(artefatoMisterioso.nome); 
// Saída: Coroa de Prata

artefatoMisterioso.nome = 'Espada de Luz'; 
console.log(artefatoMisterioso.nome); 
// Saída: Coroa de Prata (sem alteração, writable: false)

for (let chave in artefatoMisterioso) {
  console.log(chave); 
}
// Saída: nome (pois enumerable: true)

// =============================================================
// 🔹 Exemplo 2: Object.defineProperties()
// =============================================================

const grimorio = {};

Object.defineProperties(grimorio, {
  titulo: {
    value: 'Livro das Sombras',
    writable: true,
    enumerable: true,
    configurable: true
  },
  paginas: {
    value: 500,
    writable: false,
    enumerable: true,
    configurable: false
  }
});

console.log(grimorio);
/* Saída:
{
  titulo: 'Livro das Sombras',
  paginas: 500
}*/

grimorio.titulo = 'Livro da Luz'; 
grimorio.paginas = 1000; // (sem alteração, writable: false)

console.log(grimorio.titulo); // Saída: Livro da Luz
console.log(grimorio.paginas); // Saída: 500 (sem alteração, writable: false)

// =============================================================