// events.js

import { clearDisplay, deleteOne, calculate, buttonForDisplay } from './logic.js';

export function handleClickEvents(display) {
  document.addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains('clear')) {
      clearDisplay(display);
      return;
    }

    if (el.classList.contains('backspace')) {
      deleteOne(display);
      return;
    }

    if (el.classList.contains('equals')) {
      calculate(display);
      return;
    }

    if (
      el.classList.contains('calculator-button') &&
      !el.classList.contains('equals') &&
      !el.classList.contains('backspace') &&
      !el.classList.contains('clear')
    ) {
      buttonForDisplay(display, el.innerText);
    }

    display.focus();
  });
}

export function handleKeyboardShortcuts(display) {
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      calculate(display);
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      deleteOne(display);
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      clearDisplay(display);
      return;
    }

    const allowedKeys = '0123456789+-*/().';
    const operatorsMap = {
      '*': '×',
      '/': '÷'
    };

    if (allowedKeys.includes(e.key)) {
      e.preventDefault();
      const displayChar = operatorsMap[e.key] || e.key;
      buttonForDisplay(display, displayChar);
    }
  });
}