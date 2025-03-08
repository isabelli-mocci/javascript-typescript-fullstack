// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex004 - Manipulando Strings 
// Isabelli Cristina Mocci - 05/03/2025
// =============================================================

//               01234567
let umaString = "Um texto";

// 🎯 Acessando caracteres na string
console.log(umaString[4]);         // Retorna 'e' (caractere na posição 4)
console.log(umaString[8]);         // Retorna undefined (índice inexistente)
console.log(umaString.charAt(6));  // Retorna 't' (caractere na posição 6)


// 🔎 Buscando dentro da string
console.log(umaString.indexOf("texto"));  // Retorna posição onde "texto" começa
console.log(umaString.indexOf("rosa"));   // Retorna -1 (a string "rosa" não existe)


// 🔠 Expressões regulares (RegEx)
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas da string
console.log(umaString.match(/[a-z]/));  // Retorna apenas a primeira letra minúscula encontrada


// 🔄 Substituição de valores
console.log(umaString.replace("Um", "Outro")); // Troca "Um" por "Outro"
console.log(umaString.replace(/t/g, "#"));     // Substitui todos os 't' por '#'


// 🔤 Mudando caixa (maiúsculas/minúsculas)
console.log(umaString.toLocaleLowerCase()); // Deixa tudo minúsculo
console.log(umaString.toLocaleUpperCase()); // Deixa tudo MAIÚSCULO


// ✂️ slice() → Recorta partes da string
console.log(umaString.slice(3));      // "texto" (corta a partir do índice 3)
console.log(umaString.slice(0, 2));   // "Um" (recorta do índice 0 ao 1)
console.log(umaString.slice(-5));     // (recorta os últimos 5 caracteres)
console.log(umaString.slice(-5, -2)); // "tex" (recorta do índice -5 ao -3)


// 🔪 split() → Divide a string em um array
console.log(umaString.split(" "));  // ["Um", "texto"] (divide pelo espaço)
console.log(umaString.split(""));   // ["U", "m", " "] (divide cada caractere)
console.log(umaString.split("t"));  // ["Um ", "ex", "o"] (remove os "t" e divide)


// 🧹 trim() → Remove espaços extras
console.log(umaString.trim());      // (remove espaços no início e no fim)
console.log(umaString.trimStart()); // "Um texto   " (só remove os do começo)
console.log(umaString.trimEnd());   // "   Um texto" (só remove os do final)
