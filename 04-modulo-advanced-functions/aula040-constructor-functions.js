// =============================================================
// Curso de JavaScript e TypeScript - Aula 40: Constructor Functions
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 10/04/2025
// =============================================================

/*
    🔹 Constructor Functions

      → criam objetos com estrutura fixa (como um molde)
      → usa `new` para criar instâncias
      → nome com PascalCase (ex: Pessoa, Produto, Fada).
      → substitui `class` no pré-ES6. 
    
    🔹 Como o `new` funciona?

      1. cria um objeto vazio {}
      2. o `this` dentro da função aponta para objeto
      3. atibrui para o objeto as propriedades e métodos definidos na função
      4. retorna o objeto automaticamente

    🔹 Diferença entre Factory e Constructor

      ▫️ Factory Function:
        - camelCase
        - não usa `new`
        - precisa de `return`
        - `this` não é necessário

      ▫️ Constructor Function:
        - PascalCase
        - usa `new`
        - `return` implícito
        - precisa de `this`
*/

// =============================================================
// 🔹 Exemplo 1 - Constructor Function Default
// =============================================================

function Fada(nome, asa) {
  this.nome = nome;
  this.asa = asa;
  this.falar = function () {
    return `${this.nome} bate as asas de ${this.asa} e diz: ✨ Oi! ✨`;
  };
}

const fada1 = new Fada("Isabelli", "cristalinas");
console.log(fada1.falar());

// Saída: Isabelli bate as asas de cristalinas e diz: ✨ Oi! ✨

// 🧩 Aprendizado:
// - `this` vincula propriedades ao novo objeto.
// - Métodos internos consomem mais memória se criados para cada instância

// =============================================================
// 🔹 Exemplo 2 - Constructor Function with Prototype
// =============================================================
/*
  ❓ Usar prototype faz o método ser compartilhado entre todos os objetos criados, evitando duplicação na memória.

  Exemplo:
*/

function Elfo(nome, agilidade) {
  this.nome = nome;
  this.agilidade = agilidade;
}

Elfo.prototype.correr = function () {
  return `${this.nome} corre com agilidade ${this.agilidade}! 🏹`;
};

const legolas = new Elfo("Legolas", 98);
console.log(legolas.correr()); 

// Saída: Legolas corre com agilidade 98! 🏹

// 🧩 Aprendizados:
// - métodos em prototype são compartilhados entre instâncias.
// - ótimo para economia de memória.

// =============================================================
// 🔹 Exemplo 3 - Constructor com 2 métodos internos (ações + atualização de estado)	
// =============================================================

function Dragao(nome, cor, nivel) {
  this.nome = nome;
  this.cor = cor;
  this.nivel = nivel;

  this.rugir = function () {
    return `${this.nome} ruge com fúria! Nível: ${this.nivel} 🔥`;
  };

  this.upar = function () {
    this.nivel += 1;
    return `${this.nome} subiu para o nível ${this.nivel}! 🎉`;
  };
}

const draco = new Dragao("Draco", "vermelho", 3);
console.log(draco.rugir()); // Saída: Draco ruge com fúria! Nível: 3 🔥
console.log(draco.upar());  // Saída: Draco subiu para o nível 4! 🎉

// 🧩 Aprendizados:
// - métodos que alteram o estado interno da instância.
// - ótimo para personagens com progressão (como jogos/RPGs).

// =============================================================
// 🔹 Exemplo 4 - `Object.defineProperty` para criar `getter`
// =============================================================

function Pet(nome, tipo, idade) {
  this.nome = nome;
  this.tipo = tipo;
  this.idade = idade;

  Object.defineProperty(this, "ehFilhote", {
    get: function () {
      return this.idade < 1;
    },
  });
}

const bichinho = new Pet("Luna", "gato", 0.5);
console.log(bichinho.ehFilhote); 

// Saída: true (porque a idade é menor que 1)

// 🧩 Aprendizados:
// - `get` cria propriedades (sem parênteses).
// - ideal exibir infos personalizadas sem chamar funções diretamente.

// =============================================================
// 🔹 Exemplo 5 - Lógica condicional e manipulação de propriedade
// =============================================================

function Feiticeiro(nome, energia) {
  this.nome = nome;
  this.energia = energia;

  this.invocar = function () {
    if (this.energia >= 10) {
      this.energia -= 10;
      return `${this.nome} invoca uma bola de energia! 💥 Energia restante: ${this.energia}`;
    } else {
      return `${this.nome} está sem energia! 😵`;
    }
  };
}

const merlin = new Feiticeiro("Merlin", 20);
console.log(merlin.invocar()); // Saída: Merlin invoca uma bola de energia! 💥 Energia restante: 10
console.log(merlin.invocar()); // Saída: Merlin invoca uma bola de energia! 💥 Energia restante: 0
console.log(merlin.invocar()); // Saída: Merlin está sem energia! 😵

// 🧩 Aprendizados:
// - lógica condicional dentro do método.
// - mostra como criar limitações e regras em objetos.

// =============================================================
// 🔹 Exemplo 6 - Personagem com status e cura
// =============================================================

function Personagem(nome, classe, vida) {
  this.nome = nome;
  this.classe = classe;
  this.vida = vida;

  this.status = function () {
    return `${this.nome} é um(a) ${this.classe} com ${this.vida} de vida. 🧬`;
  };
}

const heroina = new Personagem("Isabelli", "arqueira", 100);
console.log(heroina.status());

Personagem.prototype.curar = function () {
  this.vida += 10;
  return `${this.nome} se curou e agora tem ${this.vida} de vida! ✨`;
};

console.log(heroina.curar());

// Saída: Isabelli se curou e agora tem 110 de vida! ✨

// 🧩 Aprendizados:
// - construtor para dados, prototype para ações.
// - padrão mais usado em projetos maiores (antes das classes).

// =============================================================