// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex018 - Objeto "Date"
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Objeto "Date":

    - O construtor `new Date()` cria objetos de data em JavaScript.
    - Pode ser usado de várias formas, como mostrar a data atual, 
      definir datas específicas, ou trabalhar com milissegundos desde a época Unix.
*/

// =============================================================
// Exemplo 1: Data atual
const data1 = new Date();  // Pega a data e hora atuais
console.log(data1);
console.log(data1.toString());  // Converte para string legível

// =============================================================
// Exemplo 2: Criando data com base em milissegundos desde 01/01/1970 (Época Unix)
const tresHoras = 60 * 60 * 3 * 1000;  // 3 horas em milissegundos
const data2 = new Date(0 + tresHoras);  // Marca Unix é 01/01/1970
console.log(data2);
console.log(data2.toString());

// =============================================================
// Exemplo 3: Adicionando 1 dia à data
const umDia = 60 * 60 * 24 * 1000;  // 1 dia em milissegundos
const data3 = new Date(0 + tresHoras + umDia);  // Adiciona 1 dia
console.log(data3);
console.log(data3.toString());

// =============================================================
// Exemplo 4: Criando data específica (ano, mês, dia, hora, minuto, segundo, milissegundo)
const data4 = new Date(2019, 3, 20, 15, 14, 27, 500);  // Lembre-se que o mês é 0-indexed (março = 3)
console.log(data4);
console.log(data4.toString());

// =============================================================
// Exemplo 5: Criando data a partir de uma string
const data5 = new Date("2019-04-20 20:15:59.100");  // Formato "YYYY-MM-DD HH:MM:SS"
console.log(data5);
console.log(data5.toString());

// Extraindo partes da data:
console.log("Dia:", data5.getDate());  // Retorna o dia do mês
console.log("Mês:", data5.getMonth() + 1);  // Mês é 0-indexed, então somamos 1
console.log("Ano:", data5.getFullYear());  // Ano com 4 dígitos
console.log("Hora:", data5.getHours());  // Hora
console.log("Minuto:", data5.getMinutes());  // Minutos
console.log("Segundo:", data5.getSeconds());  // Segundos
console.log("Milésimo de segundo:", data5.getMilliseconds());  // Milésimos de segundo
console.log("Dia da Semana:", data5.getDay());  // 0 = Domingo, 6 = Sábado

// =============================================================
// Exemplo 6: Usando `Date.now()` para obter a quantidade de milissegundos desde a época Unix
console.log(Date.now());  // Retorna a quantidade de milissegundos desde 01/01/1970

// =============================================================
// Funções auxiliares para formatação de data

// Adiciona um zero à esquerda caso o número seja menor que 10
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

// Função para formatar a data no padrão dd/mm/aaaa hh:mm:ss
function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);  // Lembrar: meses começam do 0!
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

// =============================================================
// Exemplo de data formatada
const data = new Date();
const dataBrasil = formataData(data);  // Formata a data no padrão brasileiro
console.log(dataBrasil);  // Saída: 07/03/2025 12:30:45 (exemplo)
