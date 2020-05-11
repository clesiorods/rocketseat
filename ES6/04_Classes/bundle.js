class toDoList {
  constructor() {
    this.todos = [];
  }

  addToDo() {
    this.todos.push('Novo toDo!');
    console.log(this.todos);
  }

}

var meuToDo = new toDoList();
var botao = document.querySelector("button#bot");
botao.addEventListener("click", () => {
  meuToDo.addToDo();
}); // MÉTODOS ESTÁTICOS

class matematica {
  static soma(a, b) {
    this.resp = a + b;
    console.log(this.resp);
  }

}

matematica.soma(10, 10);
