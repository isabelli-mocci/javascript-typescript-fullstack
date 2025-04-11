// =============================================================
// Curso de JavaScript e TypeScript - Aula 43: Arrays Review
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 11/04/2025
// =============================================================

/*
    🔹 Arrays

      → São uma coleção ordenada de dados que guardam qualquer tipo de dado.
      → São objetos (typeof array === 'object').
      → São indexados: cada elemento tem um índice, que começa em 0.

    🔹 Duas formas de criar Arrays:

      1. notação literal:
        const array = [valor1, valor2, valor3, ...]

      2. construtor:
        const array = new Array(valor1, valor2, valor3, ...)

*/

// =============================================================
//   🔹 Manipulação de Arrays:
// =============================================================
/*
→ shift() - remove o primeiro elemento do array
→ pop() - remove o último elemento do array
→ unshift() - adiciona um elemento ao início do array
→ push() - adiciona um elemento ao final do array
→ splice() - remove ou adiciona elementos em qualquer posição do array
    → Primeiro parâmetro: índice inicial
    → Segundo parâmetro: quantidade de itens a remover
    → Terceiro (opcional): itens a adicionar
→ delete - remove um elemento do array (deixa `empty item` e não reduz length)

Exemplo:
*/

const herois = ['Arqueira', 'Mago', 'Guerreiro'];
herois.push('Bardo'); // adiciona 'Bardo' no final do array
herois.splice(1, 1, 'Druida'); // remove 1 item a partir do índice 1 e adiciona 'Druida' nessa posição

// =============================================================
//   🔹 Métodos de Exploração de Arrays
// =============================================================
/*
→ forEach() - executa uma função para cada elemento do array
→ map() - cria um novo array com os resultados da função aplicada a cada elemento
→ filter() - cria um novo array com os elementos que passam no teste da função
→ find() - retorna o primeiro elemento que passa no teste da função
→ reduce() - aplica uma função a cada elemento do array e retorna um único valor

Exemplo:
*/

const monstros = ['Orc', 'Goblin', 'Dragão'];
const gritos = monstros.map(m => m.toUpperCase()); // ['ORC', 'GOBLIN', 'DRAGÃO']

const golpes = [10, 20, 30];
const danoTotal = golpes.reduce((acum, val) => acum + val, 0);
console.log(danoTotal); // Saída: 60

// =============================================================
//   🔹 Métodos de Organização e Transformação de Arrays
// =============================================================
/*
→ sort() - ordena os elementos do array
    ⤷ ordena como string por padrão
→ reverse() - inverte a ordem dos elementos do array
→ slice() - retorna uma cópia de uma parte do array
→ concat() - junta dois ou mais arrays
→ join() - junta os elementos do array em uma string
→ flat() - achata um array de arrays em um único array (um nível por padrão)
→ flatMap() - aplica uma função a cada elemento do array e achata o resultado (somente um nível)

Exemplo:
*/

const niveis = [10, 2, 30];
niveis.sort(); // [10, 2, 30] ❌ ordenação incorreta como string
niveis.sort((a, b) => a - b); // [2, 10, 30] ✅ ordenação numérica correta

const relicarios = [['Anel'], ['Pingente']];
const todosItens = relicarios.flat(); // ['Anel', 'Pingente']

const magias = ['Fogo', 'Gelo'];
const combinadas = magias.flatMap(m => [m, `${m} Supremo`]);
// ['Fogo', 'Fogo Supremo', 'Gelo', 'Gelo Supremo']

// =============================================================
//   🔹 Métodos de Verificação e Consultas de Arrays
// =============================================================
/*
→ includes() - verifica se um elemento está presente no array
→ findIndex() - retorna o índice do primeiro elemento que passa no teste da função
→ some() - verifica se pelo menos um elemento do array passa no teste da função
→ every() - verifica se todos os elementos do array passam no teste da função
→ indexOf() - retorna o índice do primeiro elemento encontrado no array
→ lastIndexOf() - retorna o índice do último elemento encontrado no array
→ entries() - retorna um objeto iterador com os pares chave/valor do array
→ keys() - retorna um objeto iterador com os índices do array
→ values() - retorna um objeto iterador com os valores do array
→ fill() - preenche todos os elementos do array com um valor

Exemplo:
*/

const criaturas = ['Dragão', 'Orc', 'Elfo'];
const todosSãoOrcs = criaturas.every(c => c === 'Orc'); // false
const existeOrc = criaturas.some(c => c === 'Orc'); // true

const slots = new Array(3).fill('Poção'); // ['Poção', 'Poção', 'Poção']

const party = ['Lucas', 'João', 'Maria', 'Ana', 'Pedro'];
party[0] = 'Matheus'; // troca o guerreiro principal

delete party[2]; // remove Maria, mas o slot vira 'vazio'
console.log(party); // Saída: ['Matheus', 'João', empty, 'Ana', 'Pedro']
console.log(party[0]); // Saída: Matheus

// =============================================================
//   🔹 Resumo
// =============================================================

/*
| ---------------|------------------------------------------------------|
| Tipo de Método | 	        Exemplos	           |  Retorna novo array? |
| ---------------|------------------------------------------------------|
| Manipulação    |  push, pop, shift, splice	   |  Não                 |
| Exploração	   |  forEach, map, filter, find	 |  map, filter sim     |
| Transformação	 |  sort, reverse, slice, flat	 |  slice, flat sim     |
| Verificação	   |  includes, every, some	       |  Não                 |
| ---------------|------------------------------------------------------|
*/
