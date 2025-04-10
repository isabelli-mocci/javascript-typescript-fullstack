  // logic.js

  export function calculate(display) {
    let expression = display.value;
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

    try {
      const result = eval(expression);

      if (result === undefined || result === null || isNaN(result)) {
        alert('Expressão inválida');
        return;
      }

      display.value = String(result);
    } catch (e) {
      alert('Expressão inválida');
    }
  }

  export function clearDisplay(display) {
    display.value = '';
  }

  export function deleteOne(display) {
    display.value = display.value.slice(0, -1);
  }

  export function buttonForDisplay(display, value) {
    display.value += value;
  }