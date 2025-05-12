// =============================================================
// Curso de JavaScript e TypeScript - Ex013: CPF Validator
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 12/05/2025
// =============================================================

/*
    🔹 Objetivo:

    Criar validador de CPF: número do CPF a ser usado para teste: 705.484.450-52

    🔸 Cálculo do primeiro dígito verificador:
        - Multiplica-se os 9 primeiros dígitos por 10, 9, 8, ..., 2
        - Soma-se o resultado.
        - O resultado da soma é dividido por 11
        - O resto da divisão é subtraído de 11.

    🔸 Cálculo do segundo dígito verificador:
      - Multiplica-se os 10 primeiros dígitos por 11, 10, 9, ..., 2
      - Soma-se o resultado.
      - O resultado da soma é dividido por 11
      - O resto da divisão é subtraído de 11.

    🔹 Regras de validação:
      
      → O CPF deve conter 11 dígitos ✔️
      → O CPF não pode conter caracteres especiais ✔️
      → O CPF não pode ser uma sequência de números iguais ✔️
      → O CPF não pode conter espaços em branco ✔️
      → O CPF não pode conter letras
      → O CPF só pode conter números dentro do intervalo de 0 a 9.
      → O CPF não pode conter padrões numéricos repetidos ✔️
  
✔️ O CPF é válido se os dois dígitos verificadores calculados forem iguais aos dígitos verificadores informados pelo usuário.
*/

// =============================================================

function cpfValidator(sentCPF) {
  this.cleanCPF = sentCPF.replace(/\D+/g, '');
}

cpfValidator.prototype.validate = function () {
  if (!this.cleanCPF || this.cleanCPF.length !== 11) return false;
  if (this.isSequence() || this.hasRepeatedPattern()) return false;

  const partialCPF = this.cleanCPF.slice(0, -2);
  const digit1 = this.createDigits(partialCPF);
  const digit2 = this.createDigits(partialCPF + digit1);

  return partialCPF + digit1 + digit2 === this.cleanCPF;
}

cpfValidator.prototype.createDigits = function (partialCPF) {
  const cpfArray = Array.from(partialCPF);
  let weight = cpfArray.length + 1;
  const total = cpfArray.reduce((acc, digit) => {
  acc += (weight * Number(digit));
  weight--;
  return acc;
  }, 0);

  const rest = 11 - (total % 11);
  return rest > 9 ? '0' : String(rest);
}

cpfValidator.prototype.isSequence = function () {
  return this.cleanCPF.split('').every((digit) => digit === this.cleanCPF[0]);
}

cpfValidator.prototype.hasRepeatedPattern = function () {
  const invalidPatterns = ['12345678900', '98765432100'];
  return invalidPatterns.includes(this.cleanCPF);
}

function testCPF(cpfString) {
  const validator = new cpfValidator(cpfString);
  console.log(`CPF: ${cpfString} ➜ ${validator.validate() ? 'Valid ✅' : 'Invalid ❌'}`);
}

testCPF('705.484.450-52'); // válido
testCPF('7X5.484.450-52'); // com letra
testCPF('123.456.789-00'); // com sequência numérica
testCPF('111.111.111-11'); // com repetição de números