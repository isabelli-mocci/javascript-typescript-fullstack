// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex019 - Switch e Case
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Switch e Case:

    - A estrutura `switch/case` é usada para lidar com múltiplas condições
      de forma mais organizada do que várias declarações `if/else`.
    - Ideal para comparar uma variável com vários valores possíveis.
*/

// =============================================================
// Exemplo 1: Usando if/else para determinar o dia da semana

const data1 = new Date("1987-04-21 00:00:00");
const diaSemana1 = data1.getDay();
let diaSemanaTexto = ""; 

if (diaSemana1 === 0) {
  diaSemanaTexto = "Domingo";
} else if (diaSemana1 === 1) {
  diaSemanaTexto = "Segunda";
} else if (diaSemana1 === 2) {
  diaSemanaTexto = "Terça";
} else if (diaSemana1 === 3) {
  diaSemanaTexto = "Quarta";
} else if (diaSemana1 === 4) {
  diaSemanaTexto = "Quinta";
} else if (diaSemana1 === 5) {
  diaSemanaTexto = "Sexta";
} else if (diaSemana1 === 6) {
  diaSemanaTexto = "Sábado";
}

console.log(diaSemana1, diaSemanaTexto);

// =============================================================
// Exemplo 2: Usando switch/case para determinar o dia da semana

const data2 = new Date("1987-04-25 00:00:00");
const diaSemana2 = data2.getDay();
let diaSemanaTexto2 = ""; 

switch (diaSemana2) {
  case 0:
    diaSemanaTexto2 = "Domingo";
    break;
  case 1:
    diaSemanaTexto2 = "Segunda";
    break;
  case 2:
    diaSemanaTexto2 = "Terça";
    break;
  case 3:
    diaSemanaTexto2 = "Quarta";
    break;
  case 4:
    diaSemanaTexto2 = "Quinta";
    break;
  case 5:
    diaSemanaTexto2 = "Sexta";
    break;
  case 6:
    diaSemanaTexto2 = "Sábado";
    break;
  default:
    diaSemanaTexto2 = "Inválido";
}

console.log(diaSemana2, diaSemanaTexto2);

// =============================================================
// Exemplo 3: Criando uma função para reaproveitar o código

function getDiaSemanaTexto(diaSemana) {
  switch (diaSemana) {
    case 0: return "Domingo";
    case 1: return "Segunda";
    case 2: return "Terça";
    case 3: return "Quarta";
    case 4: return "Quinta";
    case 5: return "Sexta";
    case 6: return "Sábado";
    default: return "Inválido";
  }
}

// Testando a função com uma nova data
const data3 = new Date("1999-08-05 00:00:00");
const diaSemana3 = data3.getDay();
const diaSemanaTexto3 = getDiaSemanaTexto(diaSemana3);

console.log(diaSemana3, diaSemanaTexto3);
