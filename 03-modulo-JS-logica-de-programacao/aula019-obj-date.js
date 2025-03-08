// =============================================================
// Curso de JavaScript e TypeScript
// Profº Luiz Otávio Miranda
// Ex019 - Objeto "Date"
// Isabelli Cristina Mocci - 07/03/2025
// =============================================================

/*
    🔹 Objeto "Date":

    - O `Date` é um objeto nativo do JS que manipula datas e horas. Com ele podemos: 
        ⮡ obter a data e hora atuais
        ⮡ criar datas personalizadas
        ⮡ formatar datas
        ⮡ realizar cálculos, etc...

    - ⚠️ O JS trabalha com datas no formato **timestamp UNIX** (milissegundos desde 01/01/1970).
*/

// =============================================================
// 🔹 Criando Datas em JavaScript
// =============================================================

const agora = new Date();
console.log("Data e hora atuais:", agora);

const dataPersonalizada = new Date(2025, 2, 8, 15, 30, 0);
console.log("Data personalizada:", dataPersonalizada);

const dataISO = new Date("2025-03-08T15:30:00");
console.log("Data a partir de string ISO:", dataISO);

const dataTimestamp = new Date(1672531200000);
console.log("Data a partir de timestamp:", dataTimestamp);

// =============================================================
// 🔹 Obtendo Informações de uma Data
// =============================================================

const data = new Date();
console.log("Ano:", data.getFullYear());
console.log("Mês:", data.getMonth() + 1);
console.log("Dia:", data.getDate());
console.log("Dia da Semana:", data.getDay());
console.log("Hora:", data.getHours());
console.log("Minutos:", data.getMinutes());
console.log("Segundos:", data.getSeconds());
console.log("Milissegundos:", data.getMilliseconds());

// =============================================================
// 🔹 Formatando Datas
// =============================================================

const dataFormatada = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
console.log("Data formatada (DD/MM/AAAA):", dataFormatada);
console.log("Formato PT-BR:", data.toLocaleDateString("pt-BR"));
console.log("Formato US:", data.toLocaleDateString("en-US"));

// =============================================================
// 🔹 Alterando Datas
// =============================================================

let dataModificada = new Date();
dataModificada.setFullYear(2030);
dataModificada.setMonth(11);
dataModificada.setDate(25);
console.log("Data modificada:", dataModificada);

// =============================================================
// 🔹 Comparando Datas
// =============================================================

const hoje = new Date();
const futuro = new Date("2025-12-31");
if (hoje > futuro) {
    console.log("A data atual já passou de 31/12/2025.");
} else {
    console.log("Ainda não chegamos em 31/12/2025.");
}

// =============================================================
// 🔹 Calculando Diferença entre Datas
// =============================================================

const natal = new Date(2025, 11, 25);
const diferencaDias = Math.floor((natal.getTime() - agora.getTime()) / (1000 * 60 * 60 * 24));
console.log(`Faltam ${diferencaDias} dias para o Natal de 2025! 🎄`);

// =============================================================
// 🔹 Convertendo `Date` para Timestamp e vice-versa
// =============================================================

const timestampAgora = Date.now();
console.log("Timestamp atual:", timestampAgora);
console.log("Data convertida do timestamp:", new Date(timestampAgora));

// =============================================================
// 🔹 Exemplos Adicionais
// =============================================================

const tresHoras = 60 * 60 * 3 * 1000;
const data2 = new Date(0 + tresHoras);
console.log("Data ajustada para 3h a partir do Unix Epoch:", data2);

const umDia = 60 * 60 * 24 * 1000;
const data3 = new Date(0 + tresHoras + umDia);
console.log("Data após adicionar 1 dia:", data3);

const data5 = new Date("2019-04-20 20:15:59.100");
console.log("Data criada a partir de string:", data5);
console.log("Dia:", data5.getDate());
console.log("Mês:", data5.getMonth() + 1);
console.log("Ano:", data5.getFullYear());
console.log("Hora:", data5.getHours());
console.log("Minuto:", data5.getMinutes());
console.log("Segundo:", data5.getSeconds());
console.log("Milissegundos:", data5.getMilliseconds());
console.log("Dia da Semana:", data5.getDay());

// =============================================================
// 🔹 Funções Auxiliares
// =============================================================

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

console.log("Data formatada personalizada:", formataData(new Date()));
