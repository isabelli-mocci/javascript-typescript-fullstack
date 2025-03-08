// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex012 - Objetos em JavaScript
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 O que são Objetos?

    - Em JavaScript, um **objeto** é uma coleção de propriedades e valores.
    - Cada propriedade de um objeto tem uma chave (também chamada de "nome") e um valor associado.
    - Objetos são frequentemente usados para representar dados mais complexos, como informações de um usuário, produto, etc.
    - As propriedades de um objeto podem ser de qualquer tipo: números, strings, arrays, funções, outros objetos, etc.
*/

// =============================================================
// 🔹 Criando Objetos
// =============================================================

/*
    - Podemos criar objetos com a notação de chaves `{}` e definir as propriedades e valores dentro dele.
*/
const pessoa = {
  nome: "Isabelli",
  idade: 25,
  cidade: "São José do Rio Preto"
};
console.log("Objeto pessoa:", pessoa);

// =============================================================
// 🔹 Acessando Propriedades de Objetos
// =============================================================

/*
  Acessando propriedades usando notação de ponto
  - Podemos acessar as propriedades de um objeto usando o nome da propriedade após o objeto.
*/
console.log("Nome:", pessoa.nome);  // Exibe: Isabelli
console.log("Idade:", pessoa.idade);  // Exibe: 25

/*
  Acessando propriedades usando notação de colchetes
  - Também podemos acessar propriedades usando colchetes, útil quando o nome da propriedade é dinâmico ou contém caracteres especiais.
*/
console.log("Cidade:", pessoa["cidade"]);  // Exibe: São José do Rio Preto

// =============================================================
// 🔹 Modificando Propriedades de Objetos
// =============================================================

/*
  Modificando uma propriedade existente
  - Podemos alterar o valor de uma propriedade de um objeto diretamente.
*/
pessoa.idade = 26;
console.log("Idade modificada:", pessoa.idade);  // Exibe: 26

/*
  Adicionando novas propriedades
  - Podemos adicionar novas propriedades a um objeto a qualquer momento.
*/
pessoa.profissao = "Desenvolvedora Web";
console.log("Profissão:", pessoa.profissao);  // Exibe: Desenvolvedora Web

// =============================================================
// 🔹 Métodos em Objetos
// =============================================================

/*
  - Um método é uma função associada a um objeto. Ele pode acessar e modificar as propriedades do objeto.
*/
const carro = {
  marca: "Ford",
  modelo: "Fusca",
  ano: 1965,
  descricao: function() {
      return `${this.marca} ${this.modelo} de ${this.ano}`;
  }
};
console.log("Descrição do carro:", carro.descricao());  // Exibe: Ford Fusca de 1965

// =============================================================
// 🔹 Object Destructuring (Desestruturação de Objetos)
// =============================================================

/*
  - Podemos "desestruturar" um objeto para extrair suas propriedades e usá-las de forma mais simples.
*/
const { nome, idade, cidade } = pessoa;
console.log("Nome:", nome);  // Exibe: Isabelli
console.log("Idade:", idade);  // Exibe: 26
console.log("Cidade:", cidade);  // Exibe: São José do Rio Preto

// =============================================================
// 🔹 Object.keys(), Object.values() e Object.entries()
// =============================================================

/*
  Object.keys()
  - Retorna um array com as chaves de um objeto.
*/
console.log("Chaves do objeto pessoa:", Object.keys(pessoa));  // Exibe: ['nome', 'idade', 'cidade', 'profissao']

/*
  Object.values()
  - Retorna um array com os valores de um objeto.
*/
console.log("Valores do objeto pessoa:", Object.values(pessoa));  // Exibe: ['Isabelli', 26, 'São José do Rio Preto', 'Desenvolvedora Web']

/*
  Object.entries()
  - Retorna um array de arrays, onde cada item é um par [chave, valor].
*/
console.log("Entradas do objeto pessoa:", Object.entries(pessoa));  
// Exibe: [['nome', 'Isabelli'], ['idade', 26], ['cidade', 'São José do Rio Preto'], ['profissao', 'Desenvolvedora Web']]

// =============================================================
// 🔹 Objetos Aninhados
// =============================================================

/*
  Objetos dentro de objetos
  - Objetos podem conter outros objetos como propriedades.
*/
const usuario = {
  nome: "Matheus",
  endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo"
  },
  contato: {
      telefone: "1234-5678",
      email: "matheus@email.com"
  }
};
console.log("Endereço do usuário:", usuario.endereco.rua);  // Exibe: Rua das Flores
console.log("Email do usuário:", usuario.contato.email);  // Exibe: matheus@email.com

// =============================================================
