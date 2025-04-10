// index.js

import updateYear from "../utils/update-year.js";
import { setupThemeToggle } from "../components/toggle-theme.js";
import { createCalculator } from "./calculator/calculator.js";

updateYear();
setupThemeToggle();

const calculator = createCalculator();
calculator.start();