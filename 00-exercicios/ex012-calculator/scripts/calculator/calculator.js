// calculator.js

import { handleClickEvents, handleKeyboardShortcuts } from './events.js';

export function createCalculator() {
  return {
    display: document.querySelector('.display-screen'),

    start() {
      handleClickEvents(this.display);
      handleKeyboardShortcuts(this.display);
    }
  };
}