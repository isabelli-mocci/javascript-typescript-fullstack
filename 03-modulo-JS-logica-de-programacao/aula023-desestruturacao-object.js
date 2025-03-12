// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex023 - Atribuição via Desestruturação (Objetos)
// Isabelli Cristina Mocci - 08/03/2025
// =============================================================

/*
    🔹 Desestruturação de Objetos:
    
    - A desestruturação permite extrair valores de um objeto e armazená-los em variáveis.
    - Diferente da desestruturação de arrays (que usa a ordem dos elementos), nos objetos a desestruturação é feita pelo **nome das propriedades**.
    - Podemos definir valores padrão, renomear variáveis e até aninhar desestruturações dentro de objetos maiores.
*/

// =============================================================
// 🔹 Exemplo Básico de Desestruturação de Objetos
// =============================================================

// Objeto com dados de um usuário:
const usuario = {
  nome: "Isabelli",
  idade: 25,
  profissao: "Desenvolvedora Front-End",
  pais: "Brasil"
};

// Desestruturação:
const { nome, idade, profissao } = usuario;

console.log("Nome:", nome);            // Isabelli
console.log("Idade:", idade);          // 25
console.log("Profissão:", profissao);  // Desenvolvedora Front-End

// =============================================================
// 🔹 Renomeando Variáveis na Desestruturação
// =============================================================

// Podemos renomear os valores extraídos para novas variáveis:
const { nome: nomeUsuario, idade: anos } = usuario;

console.log("Nome de usuário:", nomeUsuario);  // Isabelli
console.log("Idade do usuário:", anos);        // 25

// =============================================================
// 🔹 Definindo Valores Padrão
// =============================================================

// Caso a propriedade não exista no objeto, podemos definir um valor padrão:
const { cidade = "Desconhecida" } = usuario;
console.log("Cidade:", cidade); // Desconhecida

// =============================================================
// 🔹 Desestruturação em Objetos Aninhados
// =============================================================

// Objeto mais complexo:
const empresa = {
  nome: "Tech Solutions",
  localizacao: {
      cidade: "São Paulo",
      pais: "Brasil"
  }
};

// Desestruturando propriedades aninhadas:
const { nome: nomeEmpresa, localizacao: { cidade: cidadeEmpresa, pais: paisEmpresa } } = empresa;

console.log("Nome da empresa:", nomeEmpresa);      // Tech Solutions
console.log("Cidade da empresa:", cidadeEmpresa);  // São Paulo
console.log("País da empresa:", paisEmpresa);      // Brasil

// =============================================================
// 🔹 Usando Rest Operator com Objetos
// =============================================================

// Podemos capturar o restante das propriedades usando o operador "rest" (`...`)

const pessoa = {
  nome: "Matheus",
  idade: 27,
  cargo: "Desenvolvedor Back-End",
  empresa: "Tech Solutions"
};

const { nome: nomePessoa, ...restante } = pessoa;

console.log("Nome:", nomePessoa);  // Matheus
console.log("Restante das informações:", restante); // { idade: 27, cargo: "Desenvolvedor Back-End", empresa: "Tech Solutions" }

// =============================================================
// 🔹 Desestruturação em Parâmetros de Função
// =============================================================

// Podemos desestruturar objetos diretamente nos parâmetros de uma função:
function apresentar({ nome, idade }) {
  return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(apresentar(usuario)); // Olá, meu nome é Isabelli e tenho 25 anos.

// =============================================================
// 🔹 Função com Valores Padrão e Desestruturação
// =============================================================

function criarPerfil({ nome, idade, profissao = "Não informado" }) {
  return `Usuário: ${nome}, Idade: ${idade}, Profissão: ${profissao}`;
}

console.log(criarPerfil({ nome: "Lucas", idade: 30 })); // Usuário: Lucas, Idade: 30, Profissão: Não informado

// =============================================================
// 🔹 Exemplo Completo com Vários Conceitos
// =============================================================

const produto = {
  nome: "Notebook",
  preco: 4500,
  fabricante: {
      nome: "Dell",
      ano: 2024
  }
};

// Desestruturando:
const { nome: nomeProduto, preco, fabricante: { nome: marca, ano } } = produto;

console.log("Produto:", nomeProduto);    // Notebook
console.log("Preço:", preco);            // 4500
console.log("Marca:", marca);            // Dell
console.log("Ano de fabricação:", ano);  // 2024

// =============================================================
// 🔹 Desestruturação em Objetos Dentro de Arrays
// =============================================================

const alunos = [
  { nome: "Isabelli", nota: 9.5 },
  { nome: "Matheus", nota: 8.7 }
];

// Pegando os dois primeiros alunos:
const [aluno1, aluno2] = alunos;

// Desestruturando os objetos dentro do array:
const { nome: nomeAluno1, nota: notaAluno1 } = aluno1;
const { nome: nomeAluno2, nota: notaAluno2 } = aluno2;

console.log(`${nomeAluno1} tirou nota ${notaAluno1}`); // Isabelli tirou nota 9.5
console.log(`${nomeAluno2} tirou nota ${notaAluno2}`); // Matheus tirou nota 8.7

// =============================================================
// 🔹 Uso Prático: Extraindo Configurações de um Objeto
// =============================================================

const configuracoes = {
  tema: "dark",
  linguagem: "pt-BR",
  notificacoes: true
};

// Simulando um sistema que recebe configurações:
function aplicarConfiguracoes({ tema, linguagem, notificacoes }) {
  console.log(`Tema: ${tema}`);
  console.log(`Idioma: ${linguagem}`);
  console.log(`Notificações: ${notificacoes ? "Ativadas" : "Desativadas"}`);
}

aplicarConfiguracoes(configuracoes);
// Saída:
// Tema: dark
// Idioma: pt-BR
// Notificações: Ativadas
