// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex011 - Objetos (Básico)
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

// --------- Definindo o objeto pessoa1 ---------
const pessoa1 = {
  nome: "Matheus",          // Propriedade nome
  sobrenome: "Batista",     // Propriedade sobrenome
  idade: 27,                // Propriedade idade

  // Método fala() que imprime uma mensagem no console
  fala() {
    console.log(`Olá, mundo!`);
  },
};

// Chama o método fala() do objeto pessoa1
pessoa1.fala(); // Exibe: "Olá, mundo!"


// --------- Definindo o objeto pessoa2 ---------
const pessoa2 = {
  nome: "Isabelli",                   // Propriedade nome
  sobrenome: "Mocci",                 // Propriedade sobrenome
  idade: 25,                          // Propriedade idade

  // Método fala() que usa as propriedades do objeto para formar a mensagem
  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando Oi... A minha idade atual é ${this.idade}`);
  },

  // Método incrementaIdade() que aumenta a idade em 1
  incrementaIdade() {
    ++this.idade;
  }
};

// Chama o método fala() do objeto pessoa2
pessoa2.fala(); 
// Exibe: "Isabelli Mocci está falando Oi... A minha idade atual é 25"

// Incrementa a idade da pessoa2 em 1
pessoa2.incrementaIdade(); 

// Verificando a nova idade após o incremento
console.log(pessoa2.idade); // Exibe: 26
