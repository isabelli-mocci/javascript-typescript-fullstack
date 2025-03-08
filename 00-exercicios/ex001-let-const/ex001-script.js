// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex002 - Usando Const e Let
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

/*
Objetivo: 

Isabelli Cristina Mocci tem 25 anos, pesa 74kg, tem 1.55m de altura e seu IMC é de 30.80124869927159.
Isabelli nasceu em 1999.
*/
// =============================================================

const nome = "Isabelli Cristina";
const sobrenome = "Mocci";
const idade = 26;
const peso = 74;
const alturaEmMetro = 1.55;

let IMC; // peso / (altura * altura)
IMC = peso / (alturaEmMetro * alturaEmMetro);

let anoNascimento;
anoNascimento = 2025 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmMetro}m de altura e seu IMC é de ${IMC}.`
);

console.log(`${nome} nasceu em ${anoNascimento}.`);
