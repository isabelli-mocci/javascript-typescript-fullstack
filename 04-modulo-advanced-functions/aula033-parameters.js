// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 33 - Parâmetros de Função em JavaScript
// Isabelli Cristina Mocci - 01/04/2025
// =============================================================


/*
    🔹 Parâmetros de Função:

    Parâmetros são as variáveis que a função recebe para executar uma tarefa.
      ⮡ funcionam como entradas para a função
      ⮡ podem ser utilizados dentro da função

    🔹 Tipos de parâmetros:
    
    → 1. Parâmetros Normais: parâmetro básico definido na declaração da função.
    → 2. Parâmetros Opcionais: atribui valor padrão para parâmetro ausente.
    → 3. Rest Parameters (`...`): passa um número indefinido de parâmetros para a função.
    → 4. Parâmetros com Desestruturação: desestrutura os valores diretamente na declaração da função.
*/

// =============================================================
// 🔹 Parâmetros Normais
// =============================================================

/*
  ❓São os parâmetros definidos diretamente na assinatura da função. 
    ⮡ DEVEM ser passados quando a função for chamada.

  Exemplo:
*/

function saudacao(nome) { // ← parâmetro normal
  return `Olá, ${nome}!`;
}

console.log(saudacao("Isa")); // "Olá, Isa!"

// =============================================================
// 🔹 Parâmetros Opcionais (com valor padrão)
// =============================================================

/*
  ❓Em chamadas de função sem valor → é possível dar valor padrão para o parâmetro.
    ⮡ evita que valores `undefined` apareçam em operações.

  Exemplo:
*/

function calcularSoma(a, b = 5, c = 10) { // ← valores padrão
  return a + b + c;
}

console.log(calcularSoma(2)); // Saída: 17 (2 + 5 + 10)
console.log(calcularSoma(2, 3)); // Saída: 15 (2 + 3 + 10)
console.log(calcularSoma(2, undefined, 6)); // Saída: 13 (2 + 5 + 6)

// =============================================================
//  🔹 Função com `arguments`:
// =============================================================

/*
  ❓ O objeto `arguments` contém todos os parâmetros passados para a função,
  independente de quantos forem fornecidos.
  
  ❓`arguments` é tratado como uma coleção (não um array real), mas pode ser iterado.

  Exemplo:
*/

function somarTodos() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  return total;
}

console.log(somarTodos(1, 2, 3, 4, 5)); // Saída: 15

// =============================================================
//  🔹 Função com Parâmetros Fixos:
// =============================================================

/*
  ❓Funções podem ter parâmetros fixos.
    ⮡ ⚠️ caso falte informação sobre os argumentos, eles serão nomeados como `undefined`.

  Exemplo:
*/

function exibirValores(a, b, c, d) {
  console.log(a, b, c, d);
}

exibirValores(1, 2); // Saída: 1 2 undefined undefined

// =============================================================
//  🔹 Função com Desestruturação (Objetos):
// =============================================================

/*
  ❓ Desestrutura os valores de um OBJETO diretamente nos parâmetros da função.
    ⮡ facilita o acesso aos valores internos.

  Exemplo:
*/

function exibirDadosPessoa({ nome, idade, cidade }) {
  return `${nome} tem ${idade} anos e mora em ${cidade}.`;
}

const pessoa = { nome: "Isa", idade: 25, cidade: "São Paulo" };
console.log(exibirDadosPessoa(pessoa)); // "Isa tem 25 anos e mora em São Paulo."

// =============================================================
//  🔹 Função com Desestruturação (Arrays):
// =============================================================

/*
  ❓ Desestrutura os valores de um ARRAY diretamente nos parâmetros da função.
    ⮡ facilita o acesso aos valores individuais.

  Exemplo:
*/

function calcularMedia([nota1, nota2, nota3]) {
  return (nota1 + nota2 + nota3) / 3;
}

const notas = [7, 8, 9];
console.log(calcularMedia(notas)); // Saída: 8

// =============================================================
//  🔹 Função com Rest Parameters (`...`):
// =============================================================

/*
  ❓ O operador `...` captura um número indefinido de parâmetros e os coloca em um array.
  ⮡ Isso permite trabalhar com funções que podem receber um número variável de argumentos.

  Exemplo:
*/

function calcularMediaVariada(operador, ...numeros) {
  let resultado = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (operador === "+") resultado += numeros[i];
    if (operador === "-") resultado -= numeros[i];
    if (operador === "*") resultado *= numeros[i];
    if (operador === "/") resultado /= numeros[i];
  }
  return resultado;
}

console.log(calcularMediaVariada("+", 1, 2, 3, 4)); // Saída: 10 (1 + 2 + 3 + 4)
console.log(calcularMediaVariada("*", 2, 3, 4)); // Saída: 24 (2 * 3 * 4)

/*
  🔹 Função Anônima com Rest Parameters:
    ⮡ funções anônimas podem ser usadas com `...` para capturar múltiplos argumentos.

  Exemplo:
*/

const gerarMensagem = function (tipo, ...mensagens) {
  let mensagemFinal = `${tipo} MENSAGEM: `;
  // Concatena todas as mensagens passadas
  mensagemFinal += mensagens.join(" - ");
  return mensagemFinal;
};

// Exemplos de uso
console.log(gerarMensagem("INFO", "Sistema iniciado", "Processo em andamento", "Tudo certo!"));
// Saída: "INFO MENSAGEM: Sistema iniciado - Processo em andamento - Tudo certo!"

console.log(gerarMensagem("ERRO", "Falha na conexão", "Tente novamente mais tarde"));
// Saída: "ERRO MENSAGEM: Falha na conexão - Tente novamente mais tarde"

console.log(gerarMensagem("AVISO", "Espaço de armazenamento quase cheio"));
// Saída: "AVISO MENSAGEM: Espaço de armazenamento quase cheio"

// =============================================================