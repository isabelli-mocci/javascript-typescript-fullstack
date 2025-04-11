// =============================================================
// Curso de JavaScript e TypeScript - Aula 44: Splice() Method
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 11/04/2025
// =============================================================

/*
  🔹 Splice() Method

    → Método de mutação que altera o array original.
    → Permite REMOVER, ADICIONAR ou SUBSTITUIR elementos do array.
    → Retorna um novo array com os elementos removidos (ou um array vazio se nada for removido).

  🔹 Sintaxe:

    array.splice(início, deleteCount, item1, item2, ...);

  🔹 Parâmetros:

    1. início: índice onde começa a operação
    2. deleteCount: número de elementos a remover
    3. item1, item2... : elementos que serão adicionados no lugar

  🔹 Observações:

    - Se deleteCount for 0 → apenas insere elementos
    - Índices negativos começam do final do array
    - Se início > array.length → insere no final
*/

// =============================================================
//   🔹 Remoção Simples com Splice()
// =============================================================

const patrulha = ['Guerreiro', 'Mago', 'Arqueira', 'Druida'];
const removidos = patrulha.splice(1, 2); // remove 2 a partir do índice 1
console.log(removidos); // ['Mago', 'Arqueira']
console.log(patrulha); // ['Guerreiro', 'Druida']

// =============================================================
//   🔹 Remoção com Índice Negativo
// =============================================================

const reliquias = ['Anel', 'Cajado', 'Espada', 'Capa'];
reliquias.splice(-2, 1); // remove a penúltima relíquia
console.log(reliquias); // ['Anel', 'Cajado', 'Capa']

// =============================================================
//   🔹 Inserção de Elementos com Splice()
// =============================================================

const guilda = ['Clérigo', 'Paladino'];
guilda.splice(1, 0, 'Bardo', 'Feiticeiro'); // insere na posição 1
console.log(guilda); // ['Clérigo', 'Bardo', 'Feiticeiro', 'Paladino']

// =============================================================
//   🔹 Substituição de Elementos com Splice()
// =============================================================

const escudeiros = ['Tristão', 'Lancelot', 'Gawain'];
escudeiros.splice(1, 1, 'Percival'); // substitui 'Lancelot' por 'Percival'
console.log(escudeiros); // ['Tristão', 'Percival', 'Gawain']

// =============================================================
//   🔹 Reset Total com Splice()
// =============================================================

const inventario = ['Poção', 'Chave', 'Mapa'];
inventario.splice(0); // remove todos os elementos do array
console.log(inventario); // []

// =============================================================
