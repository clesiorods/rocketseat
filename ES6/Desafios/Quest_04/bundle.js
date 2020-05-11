"use strict";

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); //EXEMPLO DE DESESTRUTURAÇÃO 

var cidade = {
  nHabitantes: 10000,
  area: 23112,
  nome: "Natal"
};
var nHabitantes = cidade.nHabitantes,
    area = cidade.area,
    nome = cidade.nome;
console.log(nHabitantes, area, nome);
