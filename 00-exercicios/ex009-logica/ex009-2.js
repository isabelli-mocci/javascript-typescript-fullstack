// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex009 - Exercicio com Lógica de Programação Parte 2
// Isabelli Cristina Mocci - 10/03/2025
// =============================================================

/*
    🔹 Objetivo:
    
    - Criar uma função chamada `ePaisagem` que avalia imagem
    - A função vai receber os argumentos: largura e altura
    - Deve retornar TRUE se a imagem estiver no modo paisagem 
    
*/
// =============================================================

function ePaisagem(largura, altura) {
  return largura > altura;
}

console.log(ePaisagem(1920, 1080)); // saída: true

// com arrow function:

const ePaisagem2 = (lar, alt) => lar > alt;
console.log(ePaisagem2(1920, 1080)); // saída: true