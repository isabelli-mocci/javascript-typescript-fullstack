// =============================================================
// Curso de JavaScript e TypeScript - Aula 53: Getters e Setters
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 05/05/2025
// =============================================================

/*
    🔹 Getter e Setter

      → Métodos especiais usados para obter (get) e definir (set) valores de propriedades.

    🔹 Sintaxe:
        get nome() { ... }   → Acessa o valor
        set nome(valor) { ... } → Modifica o valor
*/

// =============================================================
//   🔹 Exemplo 1: Criando um Objeto com Getter e Setter
// =============================================================

const mago = {
  nome: 'Dorian Havilliard',
  _nivel: 1, // "_" = propriedade 'privada' por convenção

  get nivel() {
    console.log('✨ Consultando o nível do mago...');
    return this._nivel;
  },

  set nivel(novoNivel) {
    if (typeof novoNivel !== 'number' || novoNivel <= 0) {
      console.log('❌ Nível inválido!');
      return;
    }
    console.log('🔧 Atualizando nível do mago...');
    this._nivel = novoNivel;
  }
};

console.log(mago.nivel);
// Saída: ✨ Consultando o nível do mago... → 1

mago.nivel = 5;
// Saída: 🔧 Atualizando nível do mago...

console.log(mago.nivel); 
// Saída: ✨ Consultando o nível do mago... → 5

mago.nivel = 'alto'; 
// Saída: ❌ Nível inválido!

// =============================================================
// 🔹 Exemplo 2: Em uma Factory Function
// =============================================================

function criarFeitico(nome, poderBruto) {
  return {
    nome,
    _poder: poderBruto,

    get poder() {
      return `💥 ${this._poder} pontos de magia!`;
    },

    set poder(novoPoder) {
      if (novoPoder > 100) {
        console.log('⚠️ Poder excessivo! Reduzido para 100.');
        this._poder = 100;
      } else {
        this._poder = novoPoder;
      }
    }
  };
}

const feitiço1 = criarFeitico('Explosão Arcana', 80);

console.log(feitiço1.poder); 
// Saída: 💥 80 pontos de magia!

feitiço1.poder = 150;
// Saída: ⚠️ Poder excessivo! Reduzido para 100.

console.log(feitiço1.poder); 
// Saída: 💥 100 pontos de magia!

// =============================================================