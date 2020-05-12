"use strict";

document.querySelector('body').style.backgroundColor = "grey";
/*

const arr = [1, 2, 3, 4, 5, 6];

[x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

*/
////////////////////////////////////////////////////////////////////

/*

const soma = (...valores) => {
    var vt = 0;
    for (var i = 0; i < valores.length; i++) {
        vt += valores[i]; 
    }
    return vt;
}


// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

*/
/////////////////////////////////////////////////////////////////////

/*
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

const usuario1 = {...usuario, nome: 'Gabriel'};
console.log(usuario1);

const usuario2 = {...usuario, cidade: 'Londres'};
console.log(usuario2);
*/
////////////////////////////////////////////////////////////////////
////////QUESTÃO 06// //////

var usuario = 'Diego';
var idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log("O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
