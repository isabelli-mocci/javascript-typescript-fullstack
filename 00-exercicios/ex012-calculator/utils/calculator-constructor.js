// calculator created with constructor function

function Calculator() {
  this.display = document.querySelector(".display-screen");

  this.operatorsMap = {
    "*": "×",
    "/": "÷",
  };

  this.start = function () {
    this.bindEvents();
  };

  this.bindEvents = function () {
    this.handleClickEvents();
    this.handleKeyboardShortcuts();
  };

  this.handleKeyboardShortcuts = function () {
    document.addEventListener("keydown", (e) => {
      const key = e.key;

      if (key === "Enter") {
        e.preventDefault();
        this.calculate();
      } else if (key === "Backspace") {
        e.preventDefault();
        this.deleteLastChar();
      } else if (key === "Escape") {
        e.preventDefault();
        this.clearDisplay();
      } else {
        const allowedKeys = "0123456789+-*/().";
        const operatorsMap = {
          "*": "×",
          "/": "÷",
        };

        if (allowedKeys.includes(key)) {
          e.preventDefault();
          const displayChar = operatorsMap[key] || key;
          this.appendToDisplay(displayChar);
        }
      }
    });
  };

  this.calculate = function () {
    let expression = this.display.value;

    expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

    if (/[\+\-\*\/]{2,}/.test(expression)) {
      alert("Expressão inválida");
      return;
    }

    try {
      const result = eval(expression);

      if (!isFinite(result)) {
        alert("Expressão inválida");
        return;
      }

      this.display.value = String(result);
    } catch {
      alert("Expressão inválida");
    }

    this.display.focus();
  };

  this.clearDisplay = function () {
    this.display.value = "";
    this.display.focus();
  };

  this.deleteLastChar = function () {
    this.display.value = this.display.value.slice(0, -1);
    this.display.focus();
  };

  this.handleClickEvents = function () {
    document.addEventListener("click", (event) => {
      const el = event.target;

      if (el.classList.contains("calculator-button")) {
        this.appendToDisplay(el.innerText);
      } else if (el.classList.contains("clear")) {
        this.clearDisplay();
      } else if (el.classList.contains("backspace")) {
        this.deleteLastChar();
      } else if (el.classList.contains("equals")) {
        this.calculate();
      }
    });
  };

  this.appendToDisplay = function (value) {
    this.display.value += value;
    this.display.focus();
  };
}

const calculator = Calculator();
calculator.start();
