// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex004 - Array, Function, e Objetos
// Isabelli Cristina Mocci - 06/03/2025
// =============================================================

/* 
Objetivo: 

Criar um formulário em HTML onde os dados preenchidos no formulário aparecem no corpo da página e são armazenados em um array de objetos com todas as respostas do formulário.
*/

// =============================================================

function meuEscopo() {
  // Seleção dos elementos HTML
  const form = document.querySelector("#respostaForm"); // Formulário onde os dados serão preenchidos
  const respostas = document.querySelector("#respostasExibidas"); // Onde as respostas serão exibidas na página

  // Array para armazenar as respostas de cada formulário
  const pessoas = [];

  // Função que será chamada quando o formulário for enviado
  function recebeEventoForm(evento) {
    evento.preventDefault(); 

    // Coleta os dados do formulário
    const nome = form.querySelector("#nome"); 
    const sobrenome = form.querySelector("#sobrenome"); 
    const peso = form.querySelector("#peso"); 
    const altura = form.querySelector("#altura"); 

    // Adiciona as respostas do formulário ao array 'pessoas'
    pessoas.push({
      nome: nome.value, 
      sobrenome: sobrenome.value, 
      peso: peso.value, 
      altura: altura.value, 
    });

    // Exibe as respostas no console para verificação
    console.log(pessoas);

    // Exibe os dados no HTML (no corpo da página)
    respostas.innerHTML += `
      <p>Nome: ${nome.value} <br>
      Sobrenome: ${sobrenome.value} <br>
      Peso: ${peso.value} <br>
      Altura: ${altura.value} </p><br>
    `;

    // Limpa os campos do formulário após o envio
    form.reset();
  }

  // Adiciona um ouvinte de evento para o formulário, chamando a função 'recebeEventoForm' quando o formulário for enviado
  form.addEventListener("submit", recebeEventoForm);
}

// Chama a função para inicializar o formulário
meuEscopo();
