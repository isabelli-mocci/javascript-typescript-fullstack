// =============================================================
// Curso de JavaScript e TypeScript - Aula 51: Objects Review
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 25/04/2025
// =============================================================

/*
    🔹 Objetos em JavaScript

      → Objetos são coleções de pares chave-valor
      → Podem conter propriedades (dados) e métodos (funções)
      → São fundamentais para organizar e estruturar dados em JavaScript

    🔹 Sintaxe:
        const objeto = {
          chave: valor,
          método() { ... }
        };
*/

// =============================================================
//   🔹 Exemplo 1: Criando um Objeto Simples
// =============================================================

const feiticeira = {
  nome: 'Aelin Galathynius',
  reino: 'Terrasen',
  poder: 'Fogo',
  nivel: 100
};

console.log(`${feiticeira.nome} reina em ${feiticeira.reino} 🔥`);
// Saída: Aelin Galathynius reina em Terrasen 🔥

console.log(feiticeira['poder']); // ← notação de colchetes
// Saída: Fogo

// =============================================================
//   🔹 Exemplo 2: Adicionando e Modificando Propriedades
// =============================================================

const cavaleiro = {
  nome: 'Rowan Whitethorn',
  idade: 500,
  tipo: 'Guerreiro Fae',
  arma: 'Espada'
};

cavaleiro.magia = 'Vento';
cavaleiro.arma = 'Machado'; 
delete cavaleiro.idade;

console.log(cavaleiro);

/* Saída:
{
  nome: 'Rowan Whitethorn',
  tipo: 'Guerreiro Fae',
  arma: 'Machado',
  magia: 'Vento'
}*/

// =============================================================
//   🔹 Exemplo 3: Objetos com Métodos
// =============================================================

const grimoire = {
  nome: 'Livro dos Sopros',
  feitiços: ['Luz', 'Sombras', 'Tempestade'],
  usarFeitiço: function(feitiço) {
    return `Lançando ${feitiço} do ${this.nome}! ✨`;
  }
};

console.log(grimoire.usarFeitiço('Tempestade'));
// Saída: Lançando Tempestade do Livro dos Sopros! ✨

// =============================================================
//   🔹 Exemplo 4: Iterando Sobre Propriedades com for...in
// =============================================================

const artefato = {
  nome: 'Amuleto de Orynth',
  material: 'Ouro',
  poder: 'Proteção'
};

for (let chave in artefato) {
  console.log(`${chave}: ${artefato[chave]}`);
}

/* Saída:
nome: Amuleto de Orynth
material: Ouro
poder: Proteção
*/

// =============================================================
//   🔹 Exemplo 5: Objetos Aninhados
// =============================================================

const corteNoturna = {
  lider: {
    nome: 'Rhysand',
    poder: 'Névoa e Sombras'
  },
  membros: [
    { nome: 'Cassian', habilidade: 'Combate' },
    { nome: 'Azriel', habilidade: 'Espionagem' }
  ]
};

console.log(`${corteNoturna.lider.nome} lidera com ${corteNoturna.lider.poder} 🌌`);
// Saída: Rhysand lidera com Névoa e Sombras 🌌

console.log(corteNoturna.membros[1].nome); // Saída: Azriel

// =============================================================
//   🔹 Exemplo 6: Criando Objetos com new Object()
// =============================================================

/* ❓ new Object() cria um objeto vazio que pode ser preenchido com propriedades e métodos. */

const novaIlustracao = new Object();

novaIlustracao.tema = 'Fantasia Épica';
novaIlustracao.personagem = 'Feyre Archeron';
novaIlustracao.preco = 80;
novaIlustracao.exibirDetalhes = function() {
  return `${this.personagem} em um cenário de ${this.tema} por R$${this.preco}! 🎨`;
};

console.log(novaIlustracao.exibirDetalhes());
// Saída: Feyre Archeron em um cenário de Fantasia Épica por R$80! 🎨

console.log(novaIlustracao);

/* Saída:
{
  tema: 'Fantasia Épica',
  personagem: 'Feyre Archeron',
  preco: 80,
  exibirDetalhes: [Function]
}*/

// =============================================================
//  🔹 Exemplo 7: Objetos com Factory Function
// =============================================================

/* ❓ Factory Function: função que retorna um novo objeto. */

function criarPersonagem(nome, reino, poder) {
  return {
    nome,
    reino,
    poder,
    apresentar() {
      return `${this.nome} de ${this.reino} com poder de ${this.poder}!`;
    }
  };
}

const personagem1 = criarPersonagem('Aelin Galathynius', 'Terrasen', 'Fogo');
console.log(personagem1.apresentar());

// Saída: Aelin Galathynius de Terrasen com poder de Fogo!

// =============================================================
//  🔹 Exemplo 8: Objetos com Constructor Function
// =============================================================

/* ❓ Constructor Function: função que cria objetos com a palavra-chave 'new'. */

function Personagem(nome, reino, poder) {
  this.nome = nome;
  this.reino = reino;
  this.poder = poder;
  this.apresentar = function() {
    return `${this.nome} de ${this.reino} com poder de ${this.poder}!`;
  };
}

const personagem2 = new Personagem('Feyre Archeron', 'Prithian', 'todos os Grãos-Senhores');
console.log(personagem2.apresentar());

// Saída: Feyre Archeron de Prithian com poder de Luz e Sombras!

// =============================================================
