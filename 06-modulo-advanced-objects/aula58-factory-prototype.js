// =============================================================
// Curso de JavaScript e TypeScript - Aula 58: Factory Functions + Prototypes
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 12/05/2025
// =============================================================


/*
    🔹 Factory Functions + Prototypes

    → factory function = função que cria e retorna objetos
    → Combinadas com `Object.create()` e protótipos, os objetos criados ficam mais performáticos (não duplicam os métodos na memória).
*/

// =============================================================
// 🔹 Exemplo 1: Propriedades diretas dentro da função
// =============================================================

// ? declarar métodos dentro da `factory function` gera cópias novas de cada objeto → o prototype compartilhado melhora a performance

function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },

    comer() {
      console.log(`${this.nome} está comendo.`);
    },

    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const pessoa1 = criaPessoa("Isa", "Mocci");

pessoa1.falar();           // Isa está falando.
pessoa1.comer();           // Isa está comendo.
pessoa1.beber();           // Isa está bebendo.

// =============================================================
// 🔹 Exemplo 2: Composição de protótipos modulares
// =============================================================

// ? a versão com Object.assign reaproveita blocos de funcionalidades

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa2(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa2('Luiz', 'Otávio');

p1.falar();               // Maria está falando.
p1.comer();               // Maria está comendo.
p1.beber();               // Maria está bebendo.