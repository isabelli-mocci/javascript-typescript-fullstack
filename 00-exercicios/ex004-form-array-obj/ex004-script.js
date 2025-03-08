// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex012 - Array, Function, e Objetos
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/* 
Criar um formulário em HTML onde os dados preenchidos no form aparecem no corpo da página e são armazenados em um array de objetos com todas as respostas ao form.
*/

// =============================================================

function meuEscopo() {
  const form = document.querySelector("#respostaForm");
  const respostas = document.querySelector("#respostasExibidas");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector("#nome");
    const sobrenome = form.querySelector("#sobrenome");
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    
    console.log(pessoas);

    // Exibindo os dados no HTML
    respostas.innerHTML += `
      <p>Nome: ${nome.value} <br>
      Sobrenome: ${sobrenome.value} <br>
      Peso: ${peso.value} <br>
      Altura: ${altura.value} </p><br>
    `;

    // Limpando os campos do formulário após o envio
    form.reset();
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
