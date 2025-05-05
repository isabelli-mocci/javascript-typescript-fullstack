// =============================================================
// Curso de JavaScript e TypeScript - Aula 54: Métodos Úteis de Objetos
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 05/05/2025
// =============================================================

/*
    🔹 Métodos e Ferramentas úteis de Objetos

    1. [...]spread operator 
    2. Object.assign() 
    3. Object.getOwnPropertyDescriptor() 
    4. Object.values()
    5. Object.entries() 
*/

// =============================================================
// 🔹 Exemplo 1: [...] Spread Operator
// =============================================================

/* ❓ operador que permite expandir um objeto ou array em outro. */

const poçãoOriginal = { tipo: 'cura', intensidade: 'alta' };
const poçãoExtra = { cor: 'verde', preço: 20 };

const novaPoção = { ...poçãoOriginal, ...poçãoExtra };

console.log(novaPoção);
// Saída: { tipo: 'cura', intensidade: 'alta', cor: 'verde', preço: 20 }

// ==============================================================
// 🔹 Exemplo 2: Object.assign()
// ==============================================================

/* ❓ copia as propriedades de um ou mais objetos de origem para um objeto de destino. */

const armaduraBase = { defesa: 50 };
const encantamento = { defesa: 70, resistência: 'gelo' };

const armaduraFinal = Object.assign({}, armaduraBase, encantamento);

console.log(armaduraFinal);
// Saída: { defesa: 70, resistência: 'gelo' }

// ==============================================================
// 🔹 Exemplo 3: Object.getOwnPropertyDescriptor()
// ==============================================================

/* ❓ retorna um objeto que descreve as propriedades de um objeto, incluindo o valor, se é configurável, se é enumerável e se é gravável. */

const grimorio = { feitiço: 'Fogo Azul' };

const detalhes = Object.getOwnPropertyDescriptor(grimorio, 'feitiço');

console.log(detalhes);

/* Saída:
{
  value: 'Fogo Azul',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// ==============================================================
// 🔹 Exemplo 4: Object.values()
// ==============================================================

/* ❓ retorna um array contendo os valores das propriedades de um objeto. */

const criatura = {
  nome: 'Wyvern',
  tipo: 'Dragão',
  nivel: 7
};

console.log(Object.values(criatura));
// Saída: [ 'Wyvern', 'Dragão', 7 ]

// ==============================================================
// 🔹 Exemplo 5: Object.entries()
// ==============================================================

/* ❓ retorna um array contendo pares de chave-valor de um objeto. */

const artefato = {
  nome: 'Cálice da Eternidade',
  poder: 'Imortalidade'
};

console.log(Object.entries(artefato));
// Saída: [ ['nome', 'Cálice da Eternidade'], ['poder', 'Imortalidade'] ]

// 🔹 Exemplo 5.1: útil quando combinado com for...of ou map():

for (let [chave, valor] of Object.entries(artefato)) {
  console.log(`${chave} → ${valor}`);
}
// nome → Cálice da Eternidade
// poder → Imortalidade

// ==============================================================