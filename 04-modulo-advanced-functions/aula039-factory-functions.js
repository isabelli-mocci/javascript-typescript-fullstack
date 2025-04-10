// =============================================================
// Curso de JavaScript e TypeScript - Aula 39: Factory Functions
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 03/04/2025
// =============================================================

// =============================================================
// 🔹 Factory Functions (Funções Fábrica)
// =============================================================

/*
    🔹  O que são Factory Functions?
      ⮡ São funções que CRIAM e RETORNAM objetos.
      ⮡ Elas recebem parâmetros e devolvem objetos com propriedades e/ou métodos prontos pra uso.

    🔹 Vantagens no uso de Factory Functions:

    → São mais legíveis e diretas pra objetos simples.
    → Facilitam reuso e manutenção de código.
    → Permite lógica interna.
    → Evitam as confusões do `this` quando usado fora do objeto.
    → Perfeita pra gerar múltiplas instâncias dinâmicas.
*/

// =============================================================
// 🔹 Exemplo 1 – criaFada
// =============================================================

function criaFada(nome, asa) {
  return {
    nome,
    asa,
  };
}

const fada = criaFada("Belli", "brilhante");
console.log(fada);

// Saída: { nome: 'Belli', asa: 'brilhante' }

// =============================================================
// 🔹 Exemplo 2 – criaFada com método
// =============================================================

function criaFadaFalante(nome, asa) {
  return {
    nome,
    asa,
    falar() {
      // método (função dentro de obj)
      return `${this.nome} diz: ✨ Olá, mortal! ✨`;
    },
  };
}

console.log(criaFadaFalante("Isabelli", "de cristal").falar());

// Saída: Isabelli diz: ✨ Olá, mortal! ✨

// =============================================================
// 🔹 Exemplo 3 – Diferença entre objetos independentes e objetos por referência
// =============================================================

// Nesse exemplo cada carro é um novo objeto (instâncias separadas):

function criaCarro(marca, modelo) {
  return { marca, modelo };
}

let carroA = criaCarro("BMW", "320i");
let carroB = criaCarro("Volkswagen", "Fusca");

carroA.marca = "Fiat"; // alterando apenas o carroA

console.log(carroA); // Saída: { marca: 'Fiat', modelo: '320i' }
console.log(carroB); // Saída: { marca: 'Volkswagen', modelo: 'Fusca' }

/*
  ⬆️ No caso acima, cada chamada de criaCarro() cria um NOVO objeto na memória,
então alterar carroA não afeta carroB.
*/

// ----------------------------------------------------------

// (perigo ⚠️) Exemplo abaixo com objeto compartilhado por referência:

let carro = { marca: "Volkswagen", modelo: "Fusca" };

function criaCarroCompartilhado() {
  return carro;
}

let c1 = criaCarroCompartilhado();
let c2 = criaCarroCompartilhado();

c1.marca = "BMW"; // alterando c1, mas c2 também sofre...

console.log(c1); // Saída: { marca: 'BMW', modelo: 'Fusca' }
console.log(c2); // Saída: { marca: 'BMW', modelo: 'Fusca' }

/*
❓ O problema acontece porque a função está sempre retornando o MESMO objeto, chamado `carro`.

➡ Isso significa que c1 e c2 apontam para a MESMA referência na memória.
➡ Então, mudar uma propriedade em c1 afeta automaticamente c2.
*/

// =============================================================
// 🔹 Exemplo 4 – criaPessoa com método e `this`
// =============================================================

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    idade: 25,
    fala(assunto) {
      return `${this.nome} ${this.sobrenome}, dev de ${this.idade} anos, está ${assunto}.`;
    },
  };
}

const isa = criaPessoa("Isabelli", "Mocci");
console.log(isa.fala("aprendendo Factory Functions"));

// Saída: Isabelli Mocci, dev de 25 anos, está aprendendo Factory Functions.

// =============================================================
// 🔹 Exemplo 5 – criaPet com `getter` ehFilhote
// =============================================================
/*
🧙‍♀️ Dica: dá para usar `get` e `set` dentro da factory pra 
criar propriedades calculadas automaticamente ou controlar como valores
são lidos e modificados.
*/

function criaPet(nome, especie, idade) {
  return {
    nome,
    especie,
    idade,
    falar() {
      return `${this.nome} (um ${this.especie}) quer brincar!`;
    },
    get ehFilhote() {
      return this.idade < 1; // se idade < 1, retorna true (filhote)
    },
  };
}

const gato = criaPet("Luna", "gato", 0.8);
console.log(gato.falar());
console.log("É filhote?", gato.ehFilhote ? "Sim 🐾" : "Não 🐱");

// Saída: É filhote? Sim 🐾

// =============================================================
