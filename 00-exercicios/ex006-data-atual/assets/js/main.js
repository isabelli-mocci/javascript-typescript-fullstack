// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex006 - Aplicando Switch e Case para gerar data atual
// Isabelli Cristina Mocci - 08/03/2025
// =============================================================

/*
    🔹 Objetivo:

    - Gerar data atual do servidor (sistema) usando Switch/Case.
    - Preencher a informação da data atual no lugar da <p> no HTML.
*/

// =============================================================

function exibirDataAtual() {
  const dataAtual = new Date();
  const diaSemana = dataAtual.getDay();
  const diaMês = dataAtual.getDate();
  const mês = dataAtual.getMonth();
  const ano = dataAtual.getFullYear();
  const hora = dataAtual.getHours();
  const min = dataAtual.getMinutes();

  let nomeDia;
  let nomeMês;

  // Switch para determinar o dia da semana
  switch (diaSemana) {
    case 0: nomeDia = "Domingo"; break;
    case 1: nomeDia = "Segunda-feira"; break;
    case 2: nomeDia = "Terça-feira"; break;
    case 3: nomeDia = "Quarta-feira"; break;
    case 4: nomeDia = "Quinta-feira"; break;
    case 5: nomeDia = "Sexta-feira"; break;
    case 6: nomeDia = "Sábado"; break;
    default: nomeDia = "Dia inválido!"; break;
  }

  // Switch para determinar o mês
  switch (mês) {
    case 0: nomeMês = "Janeiro"; break;
    case 1: nomeMês = "Fevereiro"; break;
    case 2: nomeMês = "Março"; break;
    case 3: nomeMês = "Abril"; break;
    case 4: nomeMês = "Maio"; break;
    case 5: nomeMês = "Junho"; break;
    case 6: nomeMês = "Julho"; break;
    case 7: nomeMês = "Agosto"; break;
    case 8: nomeMês = "Setembro"; break;
    case 9: nomeMês = "Outubro"; break;
    case 10: nomeMês = "Novembro"; break;
    case 11: nomeMês = "Dezembro"; break;
    default: nomeMês = "Mês inválido!"; break;
  }

  // Formatação da hora e minuto
  const horaFormatada = hora < 10 ? `0${hora}` : hora;
  const minFormatado = min < 10 ? `0${min}` : min;

  // Montagem da data formatada
  const dataFormatada = `${nomeDia}, ${diaMês} de ${nomeMês} de ${ano} às ${horaFormatada}:${minFormatado}`;

  // Atualiza o conteúdo do h1
  const p = document.querySelector(".date");
  p.textContent = dataFormatada;

  // Log no console
  console.log(dataFormatada);
}

// Chama a função para exibir a data atual
exibirDataAtual();
