// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex009 - Arrays (Básico)
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

// 🔹 Criando um array
const alunos = ["Isa", "Matheus", "Felipe", "João"];
console.log(alunos); // Exibe todo o array

// 🔹 Acessando um elemento pelo índice
console.log(alunos[1]); // "Matheus" (índice 1)

// 🔹 Editando um item do array
alunos[2] = "Aurora"; // Substitui "Felipe" por "Aurora"
console.log(alunos);

// 🔹 Adicionando elementos
alunos.unshift("Olga"); // Adiciona "Olga" no início
console.log(alunos);

alunos.push("Felipe"); // Adiciona "Felipe" no final
console.log(alunos);

// 🔹 Ordenando os itens do array
alunos.sort(); // Organiza os elementos em ordem alfabética
console.log(alunos);

// 🔹 Removendo elementos
alunos.shift(); // Remove o primeiro item
console.log(alunos);

alunos.pop(); // Remove o último item
console.log(alunos);

// 🔹 Removendo sem alterar índices
delete alunos[0]; // Remove o item, mas mantém o espaço no array
console.log(alunos);

// 🔹 Recortando partes do array (slice)
console.log(alunos.slice(1, 3)); // Retorna um novo array do índice 1 ao 2

// 🔹 Verificando se é um array
console.log(alunos instanceof Array); // Retorna true se "alunos" for um array
