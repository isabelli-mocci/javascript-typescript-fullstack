// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 34 - O comando `return` em JavaScript
// Isabelli Cristina Mocci - 01/04/2025
// =============================================================

/*
    🔹 Comando `return`:

    É um comando fundamental em funções.
      ⮡ retorna o valor da função
      ⮡ finaliza a execução da função
      ⮡ sem `return`, a função retorna `undefined` por padrão
*/

// =============================================================
// 🔹 Exemplo básico de `return`
// =============================================================

function soma(a, b) {
  return a + b; // ← retorna a soma de 'a' e 'b'
}

const resultado = soma(3, 5);
console.log(resultado); // Saída: 8

// =============================================================
// 🔹 Retornando valores de diferentes tipos
// =============================================================

/*
  ❓`return` conduz qualquer tipo de dado:
    ⮡ números, strings, arrays, objetos, funções, etc.

  Exemplo com objeto:
*/

function criaPessoa(nome, sobrenome) {
  return { nome: nome, sobrenome: sobrenome };
}

const pessoa1 = criaPessoa("Isabelli", "Mocci");
console.log(pessoa1); // Saída: Isabelli Mocci

// =============================================================
// 🔹 Retorno sem valor (undefined)
// =============================================================

/*
  ❓Uma função pode retornar o valor `undefined`quando:
    ⮡ função não tiver `return`
    ⮡ função não retornar um valor explicitamente

  Exemplo:
*/

function semRetorno() {
  console.log("Essa função não retorna nada");
}

const resultado2 = semRetorno(); // Saída: A função não retorna nada
console.log(resultado2); // Saída: undefined

// =============================================================
// 🔹 Função de Ordem Superior
// =============================================================

/*
  ❓ Função de Ordem Superior = função que retorna OUTRA função.

  Exemplo:
*/

function falaFrase(inicio) { // ← inicio = parâmetro
  function falaResto(resto) { // ← resto = parâmetro
    return inicio + " " + resto;
  }
  return falaResto;  // ← função falaFrase() retorna a função falaResto()
}

const fala = falaFrase("Bom dia"); // ← 'Bom dia'= ARGUMENTO que subtitui o parâmetro 'inicio'
const resto = fala("🌞"); // ← '🌞'= ARGUMENTO que subtitui o parâmetro 'resto'
console.log(resto);// Saída: "Bom dia 🌞"

// ✅ Parâmetro → Variável definida na função (inicio, resto).
// ✅ Argumento → Valor passado para essa variável ("Bom dia", "🌞").

// =============================================================
// 🔹 `return` dentro de funções anônimas
// =============================================================

/*
  ❓Funções anônimas também podem usar `return` para retornar valores.

  Exemplo:
*/

const multiplicarPorDois = function (numero) {
  return numero * 2;
};

console.log(multiplicarPorDois(4)); // Saída: 8

// =============================================================
// 🔹 Função Callback
// =============================================================

/*
  ❓Função Callback = FUNÇÃO passadas como ARGUMENTO.
    ⮡ é executada depois que a função principal termina
    ⮡ a função callback vai ser "chamada de volta" no futuro

  Exemplo:
*/

// Função de autenticação → simula processo de autenticação de usuário
function autenticarUsuario(username, password, callback) {
  setTimeout(function() { // setTimeout() simula tempo de autenticação
    console.log(`Usuário ${username} autenticado com sucesso!`);
    callback(username); // chama callback() passando o nome de usuário
  }, 2000); // após 2 segundos de espera, chama a função callback
}

// Função Callback → mostra mensagem de boas-vindas
function mostrarBoasVindas(username) {
  console.log(`Bem-vindo, ${username}! Estamos felizes em ter você aqui!`);
}

// Para rodar as funções acima, chama-se autenticarUsuario() passando a função callback mostrarBoasVindas()
autenticarUsuario("Isa", "senha123", mostrarBoasVindas);

// =============================================================