// =============================================================
// Curso de JavaScript e TypeScript - Aula 59: Object Map()
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 12/05/2025
// =============================================================

/*
    🔹 Map (Estrutura de Dados)

      → `Map` é um tipo de objeto: 
          • armazena pares chave→valor na ordem que foram inseridas
          • as chaves podem ser de qualquer tipo (número, objeto, função…)
          • Ppossui tamanho e métodos próprios

    🔹 Principais Métodos:
      • `set(chave, valor)`     – adiciona ou atualiza um par  
      • `get(chave)`            – retorna o valor ou `undefined`  
      • `has(chave)`            – verifica se a chave existe  
      • `delete(chave)`         – remove o par (retorna true/false)  
      • `clear()`               – limpa todo o Map  
      • `size`                  – número de pares no Map  
      • Iteração: `map.keys()`, `map.values()`, `map.entries()`, `for…of map`

*/

// =============================================================
// 🔹 Exemplo 1: Criando um Map a partir de um Array de Usuários
// =============================================================

const users = [
  { id: 78082, name: 'Isa' },  
  { id: 78083, name: 'Isis' },  
  { id: 78081, name: 'Isac' }
];

const userMap = new Map();
for (const user of users) {
  userMap.set(user.id, user);
}

console.log(userMap);
// Saída: Map(3) { 78082 ⇒ {…}, 78083 ⇒ {…}, 78081 ⇒ {…} }

// Acessando um usuário pelo ID:
console.log(userMap.get(78083)); // { id: 78083, name: 'Isis' }

// =============================================================
// 🔹 Exemplo 2: Operações Básicas em Map
// =============================================================

console.log(userMap.has(78082));  // Saída: true
console.log(userMap.size);        // Saída: 3

// Atualizar valor:
userMap.set(78082, { id: 78082, name: 'Isa' });
console.log(userMap.get(78082));  // Saída: { id: 78082, name: 'Isa' }

// Remover um usuário:
userMap.delete(78081);
console.log(userMap.size);        // Saída: 2

// Limpar todos:
userMap.clear();
console.log(userMap.size);        // Saída: 0

// =============================================================
// 🔹 Exemplo 3: Iterando sobre Map
// =============================================================

const potions = new Map([
  ['cura',    { efeito: 'restaura 50 HP', preço: 25 }],
  ['energia', { efeito: 'restaura 30 MP', preço: 30 }],
  ['veneno',  { efeito: 'drena 20 HP',  preço: 40 }],
]);

// 1) Apenas chaves:
for (const key of potions.keys()) {
  console.log(`Poção: ${key}`);
}

// 2) Apenas valores:
for (const valor of potions.values()) {
  console.log(`→`, valor);
}

// 3) Pares chave→valor:
for (const [nome, dados] of potions.entries()) {
  console.log(`${nome}: ${dados.efeito} por ${dados.preço} moedas`);
}

// 4) `forEach` também funciona:
potions.forEach((dados, nome) => {
  console.log(`(forEach) ${nome} custa ${dados.preço}`);
});
