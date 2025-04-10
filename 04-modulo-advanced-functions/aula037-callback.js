// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 37 - Função Callback
// Isabelli Cristina Mocci - 01/04/2025
// =============================================================

/*
    🔹 Função Callback

    Função passada como argumento para outra função, que será executada dentro dessa função após algum evento ou operação ser concluída.

    🔹 Características do Callback:
      ⮡ ✅ invocada após o término de uma operação (síncrona ou assíncrona).
      ⮡ ✅ pode ser usada para garantir a execução de código após algum evento.
      ⮡ ✅ vale em funções setTimeout, fetch, ou em loops e operações assíncronas.
      ⮡ ❌ A função que recebe o callback pode ou não passar algum argumento para o callback.

*/

// =============================================================
// 🔹 Operação Síncrona
// =============================================================

function somar(a, b, callback) {
  let resultado = a + b;
  callback(resultado); // callback é chamado após a operação de soma
}

somar(3, 4, function(resultado) {
  console.log(`O resultado da soma é: ${resultado}`); // Saída: O resultado da soma é: 7
});

// =============================================================
// 🔹 Operação Assíncrona (com setTimeout):
// =============================================================

// Função para gerar um tempo aleatório de execução
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

// Função para controlar a sequência de execução
function executar() {
  f1(function() {
    f2(function() {
      f3(function() {
        console.log('Olá mundo!');  // Mensagem final após todas as funções
      });
    });
  });
}

executar();

// Saída:
//   f1
//   f2
//   f3
//   Olá mundo!

// =============================================================
// 🔹 Callback garantindo a execução do código após evento
// =============================================================

function clicarBotao(callback) {
  console.log('Botão clicado!');
  callback(); // callback é chamado após o clique
}

function mostrarMensagem() {
  console.log('Ação executada após o clique no botão!');
}

// Passando a função mostrarMensagem() como callback
clicarBotao(mostrarMensagem);

// Saída:
//   Botão clicado!
//   Ação executada após o clique no botão!

// =============================================================
// 🔹 Função COM argumento passado para o callback:
// =============================================================

function somar(a, b, callback) {
  let resultado = a + b;
  callback(resultado); // passando o resultado como argumento
}

somar(5, 10, function(resultado) {
  console.log(`O resultado da soma é: ${resultado}`); // Saída: O resultado da soma é: 15
});

// =============================================================
// 🔹 Função SEM argumento passado para o callback:
// =============================================================

function saudacao(callback) {
  console.log('Olá!');
  callback(); // não passa argumento para o callback
}

saudacao(function() {
  console.log('Bem-vindo ao meu site!');
});

// Saída:
//   Olá!
//   Bem-vindo ao meu site!

// =============================================================