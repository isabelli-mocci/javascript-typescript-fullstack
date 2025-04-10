// calculator created with factory function

function createCalculator() {
  return {
    display: document.querySelector('.display-screen'),

    start() {
      this.bindEvents();
    },

    bindEvents() {
      this.handleClickEvents();
      this.handleKeyboardShortcuts();
    },

    handleKeyboardShortcuts() {
      document.addEventListener('keydown', e => {
        // Enter → calcular
        if (e.key === 'Enter') {
          e.preventDefault();
          this.calculate();
          return;
        }

        // Backspace → apagar último caractere
        if (e.key === 'Backspace') {
          e.preventDefault();
          this.deleteOne();
          return;
        }

        // Esc → limpar tudo
        if (e.key === 'Escape') {
          e.preventDefault();
          this.clearDisplay();
          return;
        }

        // Teclas permitidas
        const allowedKeys = '0123456789+-*/().';
        const operatorsMap = {
          '*': '×',
          '/': '÷'
        };

        if (allowedKeys.includes(e.key)) {
          e.preventDefault();
          const displayChar = operatorsMap[e.key] || e.key;
          this.buttonForDisplay(displayChar);
          return;
        }
      });
    },

    calculate() {
      let expression = this.display.value;
      expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

      try {
        const result = eval(expression);

        if (result === undefined || result === null || isNaN(result)) {
          alert('Expressão inválida');
          return;
        }

        this.display.value = String(result);
      } catch (e) {
        alert('Expressão inválida');
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    handleClickEvents() {
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('clear')) {
          this.clearDisplay();
          return;
        }

        if (el.classList.contains('backspace')) {
          this.deleteOne();
          return;
        }

        if (el.classList.contains('equals')) {
          this.calculate();
          return;
        }

        if (
          el.classList.contains('calculator-button') &&
          !el.classList.contains('equals') &&
          !el.classList.contains('backspace') &&
          !el.classList.contains('clear')
        ) {
          this.buttonForDisplay(el.innerText);
        }

        this.display.focus();
      });
    },

    buttonForDisplay(value) {
      this.display.value += value;
    }
  };
}

const calculator = createCalculator();
calculator.start();
