// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Aula 35 - Escopo Léxico
// Isabelli Cristina Mocci - 01/04/2025
// =============================================================

/*
    🔹 Escopo Léxico

    O escopo léxico define onde as variáveis podem ser acessadas dentro   do código.

    As Funções tem seu próprio `escopo local`.
      ⮡ ✅ funções podem acessar variáveis que estão no seu próprio escopo.
      ⮡ ✅ funções podem acessar variáveis do escopo de funções-pai (escopo externo).
      ⮡ ✅ funções internas podem acessar variáveis de escopo externo.
      ⮡ ❌ funções externas não conseguem acessar variáveis do escopo interno (escopo da função-filha).

    🔹 Escopo Global é o nível mais alto.
      ⮡ é o nível mais alto e pode ser acessado de qualquer lugar dentro do código.
      ⮡ funções internas ou locais podem acessar variáveis do escopo global, mas não o contrário.

*/

// =============================================================
// 🔹 Exemplo do comportamento do escopo
// =============================================================

function reino() {
  const rei = "Arthur"; // 🔹 Escopo do Reino
  const rainha = "Guinevere"; // 🔹 Escopo do Reino
  const exército = "1000 cavaleiros"; // 🔹 Escopo do Reino

  function castelo() {
    const trono = "Dourado"; // 🔸 Escopo do Castelo
    const bandeira = "Brasão Real"; // 🔸 Escopo do Castelo

    function salaDoTrono() {
      console.log(`👑 Rei: ${rei}`); // ✅ Acessa! ← 🔹Reino)
      console.log(`👑 Rainha: ${rainha}`); // ✅ Acessa! ← 🔹Reino)
      console.log(`⚔️ Exército: ${exército}`); // ✅ Acessa! ← 🔹Reino)
      console.log(`🏰 Trono: ${trono}`); // ✅ Acessa! ← 🔸Castelo)
      console.log(`🚩 Bandeira: ${bandeira}`); // ✅ Acessa! ← 🔸Castelo)
    }
    return salaDoTrono; // Retorna a função salaDoTrono()
  }
  return castelo; // Retorna a função castelo()
}

const casteloAberto = reino(); // ← retorna a função castelo()
const trono = casteloAberto(); // ← retorna a função salaDoTrono()

trono(); // Executa a função salaDoTrono()

// ❌ ERRO!
// "rei" só existe dentro do escopo da função salaDoTrono()
// Não é possível acessar a variável "rei" fora da função.
console.log(`O trono é ${rei}`);
