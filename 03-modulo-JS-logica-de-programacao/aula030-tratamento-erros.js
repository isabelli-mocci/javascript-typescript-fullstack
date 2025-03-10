// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex030 - Tratamento de Erros: Try, Catch, Throw e Finally
// Isabelli Cristina Mocci - 10/03/2025
// =============================================================

/*
    🔹 Tratamento de Erros: Try, Catch, Throw e Finally
    
    - `try`: Tenta executar um bloco de código que pode gerar erros.
    - `catch`: Captura e lida com erros que ocorrerem no bloco `try`.
    - `throw`: Lança um erro explicitamente.
    - `finally`: Executa um bloco de código, independentemente de um erro ter ocorrido ou não.

*/
// =============================================================
// 🔹 Exemplo com Try
// =============================================================

console.log("Exemplo com try:");

function exemploTry() {
  try {
    // Tentando executar um código que pode gerar um erro
    let resultado = 10 / 0; // Não gera erro, mas poderia
    console.log("Resultado:", resultado);
  } catch (erro) {
    console.log("Erro capturado:", erro.message);
  }
}

exemploTry(); // Exibe "Resultado: Infinity"

// =============================================================
// 🔹 Exemplo com Catch
// =============================================================

console.log("\nExemplo com catch:");

function exemploCatch() {
  try {
    let numero = "abc"; // Tentando operar com uma string
    let resultado = numero * 10; // Isso geraria um NaN
    if (isNaN(resultado)) {
      throw new Error("O valor não é um número válido!");
    }
  } catch (erro) {
    console.log("Erro capturado:", erro.message); // Captura e exibe o erro
  }
}

exemploCatch(); // Exibe "Erro capturado: O valor não é um número válido!"

// =============================================================
// 🔹 Exemplo com Throw
// =============================================================

console.log("\nExemplo com throw:");

function exemploThrow() {
  let idade = -5; // Idade inválida

  if (idade < 0) {
    throw new Error("A idade não pode ser negativa!"); // Lançando um erro
  }

  console.log("Idade válida:", idade);
}

try {
  exemploThrow();
} catch (erro) {
  console.log("Erro capturado:", erro.message); // Captura e exibe o erro
}

// =============================================================
// 🔹 Exemplo de múltiplos erros com Throw
// =============================================================

console.log("\nExemplo com múltiplos erros e throw:");

function validarNumero(numero) {
  try {
    if (isNaN(numero)) {
      throw new Error("O valor não é um número!");
    }
    if (numero <= 0) {
      throw new Error("O número deve ser maior que zero!");
    }
    console.log("Número válido:", numero);
  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}

validarNumero(-5); // Lança um erro de número negativo
validarNumero("teste"); // Lança um erro de tipo não numérico
validarNumero(10); // Número válido

// =============================================================
// 🔹 Exemplo de Try, Catch e Throw em conjunto
// =============================================================

console.log("\nExemplo com Try, Catch e Throw:");

function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero!");
    }
    let resultado = a / b;
    console.log(`Resultado da divisão: ${resultado}`);
  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}

dividir(10, 2); // Executa corretamente
dividir(10, 0); // Lança um erro e é tratado pelo catch

// =============================================================
// 🔹 Exemplo com Finally
// =============================================================

console.log("\nExemplo com finally:");

function exemploFinally() {
  try {
    console.log("Executando código no try...");
    let resultado = 10 / 2; // Não gera erro
    console.log("Resultado:", resultado);
  } catch (erro) {
    console.log("Erro capturado:", erro.message);
  } finally {
    console.log(
      "Código no finally sempre será executado, independentemente de erro."
    );
  }
}

exemploFinally(); // Exibe o código do try, catch (se necessário) e finally

// =============================================================
// 🔹 Exemplo combinado com try, catch, throw e finally
// =============================================================

console.log("\nExemplo combinado com try, catch, throw, e finally:");

function validarNumero(numero) {
  try {
    if (isNaN(numero)) {
      throw new Error("O valor fornecido não é um número!"); // Lança um erro se não for número
    }
    if (numero <= 0) {
      throw new Error("O número deve ser maior que zero!"); // Lança erro se o número for negativo ou zero
    }
    console.log("Número válido:", numero);
  } catch (erro) {
    console.log("Erro capturado:", erro.message); // Captura o erro e exibe a mensagem
  } finally {
    console.log("Operação de validação finalizada."); // Sempre será executado, independentemente de erro
  }
}

// Testando a função com diferentes entradas
validarNumero(10); // Número válido
validarNumero(-5); // Lança erro: número negativo
validarNumero("teste"); // Lança erro: não é um número

// =============================================================
// 🔹 Exemplo com hora
// =============================================================

console.log("\nExemplo com hora:");

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Error: Esperando instância de Date.");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleString("PT-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora();
  console.log(hora);
} catch (error) {
    // tratar erro
} finally {
  console.log('Tenha um bom dia!✨');
}
