// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex009 - Objeto "Math"
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/*
    🔹 O que é o Objeto Math?

    - O `Math` é um objeto embutido no JavaScript que fornece métodos e constantes matemáticas.
    - Ele não é um construtor, então não podemos criar instâncias de `Math`.
    - Utilizado para cálculos avançados como arredondamentos, potências, raízes, trigonometria, etc.
*/

// =============================================================
// 🔹 Principais Constantes do Objeto Math
// =============================================================

console.log("PI:", Math.PI); // 3.141592653589793
console.log("Euler (E):", Math.E); // 2.718281828459045
console.log("Raiz quadrada de 2:", Math.SQRT2); // 1.4142135623730951

// =============================================================
// 🔹 Métodos de Arredondamento
// =============================================================

let numeroBase = 9.49578;
console.log("Arredondar para baixo:", Math.floor(numeroBase)); // 9
console.log("Arredondar para cima:", Math.ceil(numeroBase)); // 10
console.log("Arredondar automaticamente:", Math.round(numeroBase)); // 9

const numero = 5.67;
console.log("Arredondar para baixo:", Math.floor(numero)); // 5
console.log("Arredondar para cima:", Math.ceil(numero)); // 6
console.log("Arredondar automaticamente:", Math.round(numero)); // 6

// =============================================================
// 🔹 Máximo e Mínimo
// =============================================================

console.log("Maior número da sequência:", Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // 1500
console.log("Menor número da sequência:", Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // -50
console.log("Maior número entre 10, 20, 30:", Math.max(10, 20, 30)); // 30
console.log("Menor número entre 10, 20, 30:", Math.min(10, 20, 30)); // 10

// =============================================================
// 🔹 Potência e Raiz
// =============================================================

console.log("2 elevado a 3:", Math.pow(2, 3)); // 8
console.log("Raiz quadrada de 16:", Math.sqrt(16)); // 4
console.log("Raiz quadrada de numeroBase:", Math.sqrt(numeroBase)); // 3.08
console.log("2 elevado a 3 (usando **):", 2 ** 3); // 8

// =============================================================
// 🔹 Números Aleatórios
// =============================================================

console.log("Número aleatório entre 0 e 1:", Math.random());
console.log("Número aleatório entre 5 e 10:", Math.random() * (10 - 5) + 5);
console.log("Número aleatório arredondado entre 5 e 10:", Math.floor(Math.random() * (10 - 5 + 1) + 5));

// Função para gerar número aleatório entre min e max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Número aleatório entre 50 e 100:", numeroAleatorio(50, 100));

// =============================================================
// 🔹 Valores Absolutos
// =============================================================

console.log("Valor absoluto de -50:", Math.abs(-50)); // 50

// =============================================================
// 🔹 Trigonometria (sen, cos, tan)
// =============================================================

console.log("Seno de 90° (convertido para radianos):", Math.sin(90 * Math.PI / 180)); // 1
console.log("Cosseno de 0°:", Math.cos(0)); // 1
console.log("Tangente de 45° (convertido para radianos):", Math.tan(45 * Math.PI / 180)); // ~1

// =============================================================
