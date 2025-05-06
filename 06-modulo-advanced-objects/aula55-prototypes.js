// =============================================================
// Curso de JavaScript e TypeScript - Aula 55: Prototypes
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 05/05/2025
// =============================================================

/*
    🔹 PROTOTYPES – Herança no JavaScript 

  O JavaScript é uma linguagem baseada em protótipos, diferente de outras linguagens que usam classes de forma pura.

    🔹 O que é Prototype?

  Um protótipo é um objeto que funciona como um molde para outros objetos.

    🔹 Como Prototypes funcionam?

      → Todo objeto em JS tem um atributo oculto chamado [[Prototype]]  
      → Esse atributo é um link para outro objeto (o protótipo)  
      → Existem 2 formas de acessar esse link:
        🔸 `__proto__` (não padrão)
        🔸 `Object.getPrototypeOf(obj)` ✅ (forma recomendada)

    🔹 Prototype Chain 

    Ao tentar acessar uma propriedade ou método que não existe no objeto, o JS procura em seus ancestrais:

      1. Procura na instância (`obj.algumaCoisa`)
      2. Se não achar, procura no protótipo (`obj.__proto__`)
      3. Continua subindo na cadeia (`obj.__proto__.__proto__`...)
      4. Até chegar em `null`
      5. Ou até chegar no `Object.prototype` (ancestral de todos os objetos)
      6. Se nada for encontrado até aí, JS retorna `undefined`
*/

// =============================================================
// 🔹 Exemplo 1: Herança com Prototype
// =============================================================

/*
  ❓ aqui 'maga' herdou o método atacar() da 'guerreira' por causa do prototype 
*/

const guerreira = {
  arma: 'Espada',
  atacar() {
    return `Atacando com ${this.arma}! ⚔️`;
  }
};

const maga = {
  arma: 'Magia'
};

maga.__proto__ = guerreira;

console.log(maga.atacar()); // Saída: "Atacando com Magia! ⚔️"

// =============================================================
// 🔹 Exemplo 2: Herança com Object.create()
// =============================================================

/* ❓ Object.create() cria um objeto com um protótipo especificado. */

const criaturaBase = {
  tipo: 'Fera',
  rugir() {
    return `${this.nome} ruge como uma ${this.tipo}! 🐲`;
  }
};

const draco = Object.create(criaturaBase);
draco.nome = 'Draco da Névoa';

console.log(draco.rugir()); // Saída: "Draco da Névoa ruge como uma Fera! 🐲"

// =============================================================
// 🔹 Exemplo 3: Prototype em Funções Construtoras
// =============================================================

/* 
  ❓ tudo que está no '.prototype' da função construtora é compartilhado por todas as instâncias 
*/

function Feiticeiro(nome) {
  this.nome = nome;
}

Feiticeiro.prototype.invocar = function() {
  return `${this.nome} conjura um feitiço ancestral! ✨`;
};

const aelin = new Feiticeiro('Aelin');
console.log(aelin.invocar()); // Saída: "Aelin conjura um feitiço ancestral! ✨"

// =============================================================
// 🔹 Exemplo 4: Cadeia de Prototype com Manipulação Direta
// =============================================================

/* 
  ❓ Object.setPrototypeOf(objeto, prototipo) → muda o ancestral do objeto.
  ❓ Object.getPrototypeOf(objeto) → revela atual protótipo do objeto.
*/


const arquimaga = {
  magia: 'Fogo Celestial',
  conjurar() {
    return `${this.nome} conjura ${this.magia}! 🔥✨`;
  }
};

const elfa = {
  nome: 'Sylvana',
  arma: 'Arco Lunar'
};

const guerreiro = {
  nome: 'Thalion',
  arma: 'Espada de Cristal',
  atacar() {
    return `${this.nome} ataca com a ${this.arma}! ⚔️`;
  }
};

Object.setPrototypeOf(elfa, arquimaga); // elfa herda protótipo de arquimaga
console.log(elfa.conjurar()); // Saída: "Sylvana conjura Fogo Celestial! 🔥✨"

Object.setPrototypeOf(guerreiro, elfa); // guerreiro herda protótipo de elfa que herda de arquimaga
console.log(guerreiro.conjurar()); // Saída: "Thalion conjura Fogo Celestial! 🔥✨"

// =============================================================