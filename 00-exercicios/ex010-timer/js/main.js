// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex010 - Criando um timer com JavaScript
// Isabelli Cristina Mocci - 09/03/2025
// =============================================================

/*
    🔹 Objetivo:
    
    - Criar um timer com JavaScript:
      ⮡ o timer precisa ir até 23h59m59s
      ⮡ o timer pode ser pausado e retomado
      ⮡ ao pausar o timer, o texto fica vermelho
      ⮡ o timer pode ser zerado
*/
// =============================================================

function meuTimer() {
  let timer;
  let segundos = 0;
  const relogio = document.querySelector("#relogio");

  function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function iniciarTimer() {
    if (!timer) {
      relogio.classList.remove("pausado");
      timer = setInterval(() => {
        segundos++;
        relogio.textContent = criarHoraDosSegundos(segundos);
      }, 1000);
    }
  }

  function pausarTimer() {
    clearInterval(timer);
    timer = null;
    relogio.classList.add("pausado");
  }

  function zerarTimer() {
    clearInterval(timer);
    timer = null;
    segundos = 0;
    relogio.textContent = "00:00:00";
    relogio.classList.remove("pausado");
  }

  document.addEventListener("click", (e) => {
    if (e.target.id === "iniciar") iniciarTimer();
    if (e.target.id === "pausar") pausarTimer();
    if (e.target.id === "zerar") zerarTimer();
  });
}
meuTimer();
