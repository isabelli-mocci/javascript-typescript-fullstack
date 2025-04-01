// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 32 - Maneiras de declarar funções em JavaScript
// Isabelli Cristina Mocci - 31/03/2025
// =============================================================

/*
    🔹 Funções em JavaScript:

    Funções em JavaScript são `first-class citizens`
      ⮡ podem ser manipuladas como valores, então podem ser:
        → Atribuídas a variáveis
        → Passadas como argumentos para outras funções
        → Retornadas de outras funções

    🔹 Formas de declarar funções:  

    → 1. Declaração de Função: forma clássica (c/ hoisting)
          ⮡ `hoisting`: declarações de funções são "elevadas" para o topo do escopo, permitindo chamá-las antes da declaração
    → 2. Expressão de Função: atribuída a uma variável (s/ hoisting)
    → 3. Arrow Function: sintaxe reduzida, não tem seu próprio `this`
    → 4. Função como Método: função que pertence a um objeto (tem acesso ao `this`)

*/

// =============================================================
// 🔹 Declaração de Função (sofre hoisting)
// =============================================================

/*
  ❓ Feita com a palavra `function` + nome + parâmetros + bloco de código. 

    Exemplo:
*/

function saudacao(nome) {
    return `Olá, ${nome}!`;
  }
  
  console.log(saudacao("Isa")); // "Olá, Isa!"

  // =============================================================
  // 🔹 Expressão de Função (não sofre hoisting)
  // =============================================================
  
  /*
    ❓ É quando uma função é atribuída a uma variável.
      ⮡  função anônima (não possui um nome)
      ⮡  só pode ser chamada após a sua declaração 
  
      Exemplo:
  */

  const isaProgramando = function() { // ← expressão de função
    console.log('🖥️ A Isa está codando sem parar! 💻✨');
};

function executarRotina(rotina) { // ← função recebe outra função como argumento
    console.log('⏳ Preparando para executar a rotina da Isa...');
    rotina();
}

executarRotina(isaProgramando);

  // =============================================================
  // 🔹 Arrow Functions (sintaxe reduzida)
  // =============================================================
  
  /*
    ❓São uma forma mais curta de escrever funções em JavaScript.
      ⮡  Não possuem `this` próprio, herdando o contexto léxico.
  
      Exemplo:
  */
  
  const saudacaoArrow = (nome) => `E aí, ${nome}!`;
  
  console.log(saudacaoArrow("Isa")); // "E aí, Isa!"
  
  // =============================================================
  // 🔹 Função como Método de um Objeto
  // =============================================================
  
  /*
    ❓Funções podem ser usadas como `métodos` de objetos.
      ⮡ `método` = função que pertence a um objeto
      ⮡  tem acesso ao `this`
  
      Exemplo:
  */
  
  const pessoa = {
    nome: "Isa",
    saudacao() { // ← método
      return `Oi, meu nome é ${this.nome}!`;
    }
  };
  
  console.log(pessoa.saudacao()); // "Oi, meu nome é Isa!"

  // =============================================================