// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex005 - Projeto de Calculadora de IMC
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Objetivo:

    Usuário informa o peso e a altura e a resposta ao IMC aparece embaixo do botão de calcular. 
    Se o usuário não digitar nada, exibir "PREENCHA OS DADOS E TENTE NOVAMENTE". 
    Se o usuário digitar o peso, mas não um peso ou altura inválidos informar: "DADOS INVÁLIDOS, TENTE NOVAMENTE!"
*/

function meuEscopo() {
  const form = document.querySelector("#form-imc");
  const img = document.querySelector("#img-resultado");

  // Evita recarregar a página
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const inputPeso = evento.target.querySelector("#peso");
    const inputAltura = evento.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Validações
    if (!peso || peso < 10 || peso > 600) {
      addResultado("Peso inválido! Insira um valor entre 10kg e 600kg.", false);
      img.style.display = "none";
      return;
    }

    if (!altura || altura < 0.5 || altura > 2.5) {
      addResultado(
        "Altura inválida! Insira um valor entre 0.5m e 2.5m.",
        false
      );
      img.style.display = "none";
      return;
    }

    const IMC = getIMC(peso, altura);
    const classificacao = getNivelImc(IMC);
    const imgSrc = getImagemIMC(IMC);

    // Exibir resultado
    addResultado(`Seu IMC é <strong>${IMC}</strong> (${classificacao})`, true);

    // Exibir imagem correspondente ao IMC
    img.src = imgSrc;
    img.style.display = "block";
  });

  // Retorna a classificação do IMC
  function getNivelImc(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso Normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade Grau I";
    if (imc < 40) return "Obesidade Grau II";
    return "Obesidade Grau III";
  }

  // Retorna a URL da imagem correspondente ao IMC
  function getImagemIMC(imc) {
    if (imc < 18.5) return "./assets/img/abaixo-do-peso.png";
    if (imc < 25) return "./assets/img/peso-normal.png";
    if (imc < 30) return "./assets/img/sobrepeso.png";
    if (imc < 35) return "./assets/img/obesidade-grau-1.png";
    if (imc < 40) return "./assets/img/obesidade-grau-2.png";
    return "./assets/img/obesidade-grau-3.png";
  }

  // Calcula o IMC e formata para 2 casas decimais
  function getIMC(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
  }

  // Cria e retorna um parágrafo para o resultado
  function criaParagrafo() {
    return document.createElement("p");
  }

  // Adiciona o resultado no HTML
  function addResultado(mensagem, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ""; // Limpa o conteúdo anterior

    const paragrafo = criaParagrafo();
    paragrafo.innerHTML = mensagem;
    paragrafo.classList.add(isValid ? "resultado-sucesso" : "resultado-erro");
    resultado.appendChild(paragrafo);
  }
}
meuEscopo();
