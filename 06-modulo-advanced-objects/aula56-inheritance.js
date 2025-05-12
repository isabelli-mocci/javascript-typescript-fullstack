// =============================================================
// Curso de JavaScript e TypeScript - Aula 56: Herança em JS
// Professor: Luiz Otávio Miranda
// Criado por: Isabelli Cristina Mocci
// Data: 05/05/2025
// =============================================================

/*
    🔹 Herança Prototipal em JavaScript

      → em JS objetos podem "herdar" propriedades e métodos de outros objetos.
      → essa herança acontece através da cadeia de protótipos (prototype chain).
      → o JS sobe na cadeia de prototypes até achar a propriedade ou método que está sendo chamado.
      → se não encontrar, retorna undefined.
      → a herança pode ser feita via 'Object.create()' ou através de funções construtoras.
*/

// =============================================================
// 🔹 Exemplo 1: Herança Clássica com Object.create()
// =============================================================

const usuarioBase = {
  tipo: 'Usuário Padrão',
  acessarPainel() {
    return `🔓 Acesso ao painel concedido como: ${this.tipo}.`;
  }
};

const aprendiz = Object.create(usuarioBase);
aprendiz.tipo = 'Monitor de Aprendizagem';

console.log(aprendiz.acessarPainel());
// Saída: 🔓 Acesso ao painel concedido como: Monitor de Aprendizagem.

// =============================================================
// 🔹 Exemplo 2: Herança com Função Construtora
// =============================================================

function Student(name, email) {
  this.name = name;
  this.email = email;
}

Student.prototype.login = function() {
  return `👤${this.name} fez login.`;
};

Student.prototype.comment = function() {
  return `🗣️${this.name} deixou um comentário.`;
};

function TeacherAssistant(name, email, scheduledWeekPosts) {
  // herda as propriedades e métodos do Student
  Student.call(this, name, email);
  this.scheduledWeekPosts = scheduledWeekPosts;
}

TeacherAssistant.prototype = Object.create(Student.prototype);
TeacherAssistant.prototype.constructor = TeacherAssistant;

TeacherAssistant.prototype.giveFeedback = function giveFeedback ({ name }) {
  return `📝${this.name} deu feedback para ${name}.`;
}

const felipePavani = new Student('Felipe Pavani', 'felipe@gmail.com')
const isabelliMocci = new TeacherAssistant('Isabelli Mocci', 'isabelli@gmail.com', true)

console.log(felipePavani);  // Saída: Student { name: 'Felipe Pavani', email: '
console.log(isabelliMocci); // Saída: TeacherAssistant { name: 'Isabelli Mocci', email: '

console.log(isabelliMocci.giveFeedback(felipePavani)); // Saída: 📝Isabelli Mocci deu feedback para Felipe Pavani.
console.log(isabelliMocci.login()); // Saída: 👤Isabelli Mocci fez login.
console.log(isabelliMocci.login === felipePavani.login); // Saída: true (método herdado)

// =============================================================
// 🔹 Exemplo 3: Prototype Chain
// =============================================================

console.log(isabelliMocci instanceof TeacherAssistant); // true
console.log(isabelliMocci instanceof Student);          // true
console.log(isabelliMocci instanceof Object);           // true

/* 
    Cadeia de protótipos:
  isabelliMocci 
    → TeacherAssistant.prototype 
      → Student.prototype 
        → Object.prototype 
          → null
*/
