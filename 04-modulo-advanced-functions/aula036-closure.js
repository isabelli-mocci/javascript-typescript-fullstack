// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 36 - Closure
// Isabelli Cristina Mocci - 01/04/2025
// =============================================================

/*
    🔹 Closure

    Closure ocorre quando uma função "lembra" do seu escopo léxico, mesmo após a execução da função externa.

    🔹 Características do Closure:
      ⮡ ✅ A função interna pode acessar variáveis do seu escopo externo, mesmo que a função externa já tenha sido executada.
      ⮡ ✅ A variável do escopo da função externa permanece acessível à função interna, criando o "fechamento" do escopo.
      ⮡ ❌ A função externa não pode acessar variáveis da função interna, pois a função interna vive dentro de um escopo local.

*/

// =============================================================
// 🔹 Exemplo de Closure - Controle de Envio de Formulário
// =============================================================

// A função de envio de formulário mantém o controle de quantas vezes o formulário foi enviado.
// Cada instância da função de envio "lembra" do contador de envios, mesmo após o envio do formulário.

function criarFormulario() {
  let contadorEnvios = 0; // ← escopo da função externa, variável de controle

  function enviarFormulario() {
    contadorEnvios++; // incrementa o contador a cada envio
    console.log(`Formulário enviado ${contadorEnvios} vez(es)!`); // exibe o nº de envios
  }

  return enviarFormulario; // retorna a função que mantém o controle dos envios
}

const formulario = criarFormulario(); // cria uma instância do formulário

formulario(); // Saída: Formulário enviado 1 vez!
formulario(); // Saída: Formulário enviado 2 vezes!
formulario(); // Saída: Formulário enviado 3 vezes!

// ⚠️ Mesmo após várias execuções, a função enviarFormulario() mantém o valor de contadorEnvios
// pois ela "lembra" do escopo da função externa/pai criarFormulario() → (closure).

// =============================================================