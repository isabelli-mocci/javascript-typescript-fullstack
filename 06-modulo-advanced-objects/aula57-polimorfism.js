// =============================================================
// Curso de JavaScript e TypeScript - Aula 57: Polimorfismo
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 12/05/2025
// =============================================================

/*
    🔹 Polimorfismo
      → Conceito fundamental da POO
      → Permite que diferentes objetos compartilhem o mesmo método
      → Mas comportamentos específicos para cada um.

    🔹 Como ocorre no JavaScript:
      - Comum no uso de protótipos, funções construtoras ou classes.
      - Implementado por meio da sobrescrita (override) de métodos herdados da SUPERclasse nas SUBclasses.
*/

// =============================================================
// 🔹 Superclasse: Conta
// =============================================================

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
  if (valor > this.saldo) {
    console.log(`❌ Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.extrato();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.extrato();
};

Conta.prototype.extrato = function() {
  console.log(
    `🏦 Ag/C.: ${this.agencia}/${this.conta} | ` +
    `💰 Saldo: R$${this.saldo.toFixed(2)}`
  );
};

// =============================================================
// 🔹 Subclasse: Conta Corrente (com limite de saque)
// =============================================================

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`❌ Saldo insuficiente (limite incluso): R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.extrato();
};

// =============================================================
// 🔹 Subclasse: Conta Poupança (sem limite adicional)
// =============================================================

function ContaPoupanca(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// =============================================================
// 🔹 Demonstração: Polimorfismo em ação
// =============================================================

const myContaCorrente = new ContaCorrente(11, 22, 0, 100);
myContaCorrente.depositar(10);  // 💰 +10
myContaCorrente.sacar(110);     // -10 da conta e -100 do limite adicional
myContaCorrente.sacar(1);       // bloqueado: limite excedido

console.log(); // Separador visual

const myContaPoupanca = new ContaPoupanca(12, 33, 0);
myContaPoupanca.depositar(10);  // 💰 +10
myContaPoupanca.sacar(10);      // saque ok
myContaPoupanca.sacar(1);       // saldo insuficiente