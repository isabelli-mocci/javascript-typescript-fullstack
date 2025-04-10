// =============================================================
// Curso de JavaScript e TypeScript - Aula 42: Generator Functions
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 10/04/2025
// =============================================================

/*
    🔹 Generator Functions

      → São funções que pausam e continuam sua execução
      → Usam `function*` (com asterisco)
      → Usam `yield` no lugar de `return` para retornar valores "em parcelas"
    
    🔹 Quando usar Generator Functions?

      1. ao precisar de dados sob demanda (ex: streams, iteradores grandes)
      2. para controlar o fluxo de execução manualmente
      3. em situações onde performance e memória importam (ex: listas infinitas)

    🔹 Sintaxe básica:

      function* nomeDoGerador() {
        yield valor1;
        yield valor2;
        ...
      }

    🔹 Como usar?

      const gerador = nomeDoGerador();
      gerador.next(); → retorna { value: x, done: false }
      gerador.next(); → continua de onde parou
      ...
      gerador.next(); → { value: undefined, done: true } → acabou!

    ⚠️ Lembrete:
      - o `yield` *pausa* a função
      - ela só continua com `next()`
*/

// =============================================================
// 🔹 Exemplo 1 - Generator simples
// =============================================================

function* geraFeitico() {
  yield '🧙‍♀️ Bola de Fogo';
  yield '🧊 Sopro Congelante';
  yield '⚡ Raio Místico';
}

const grimorio = geraFeitico();

console.log(grimorio.next()); // Saída: { value: '🧙‍♀️ Bola de Fogo', done: false }
console.log(grimorio.next()); // Saída: { value: '🧊 Sopro Congelante', done: false }
console.log(grimorio.next()); // Saída: { value: '⚡ Raio Místico', done: false }
console.log(grimorio.next()); // Saída: { value: undefined, done: true }

// =============================================================
// 🔹 Exemplo 2 - Gerador infinito
// =============================================================

function* contadorInfinito() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const contador = contadorInfinito();

console.log(contador.next().value); // Saída: 0
console.log(contador.next().value); // Saída: 1
console.log(contador.next().value); // Saída: 2
// ...e assim vai, até o fim dos tempos 🕰️

// =============================================================
// 🔹 Exemplo 3 - Generator com lógica embutida
// =============================================================

function* geradorPares(limite) {
  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0) yield i;
  }
}

const pares = geradorPares(10);

for (let valor of pares) {
  console.log(valor); // Saída: 0, 2, 4, 6, 8, 10
}

// 🧩 Aprendizado:
// - generators são perfeitos pra listas grandes ou iteráveis complexos
// - economizam memória porque geram 1 item por vez (lazy evaluation)
// - combinam bem com loops (`for...of`), `next()`, e até `...spread`

// =============================================================
