document.querySelector('body').style.backgroundColor = "grey";

/*
// 3.1
const arr = [1, 2, 3, 4, 5];

var arrP10 = arr.map((item) => {
 return item + 10;
});
console.log(arrP10);
*/

/////////////////////////////////////////////////////////////////

/*
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => {
 return usuario.idade;
}
console.log(mostraIdade(usuario));
*/

////////////////////////////////////////////////////////////////

/*
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
*/

////////////////////////////////////////////////////////////////

// 3.4
const promise = () => {
    return new Promise((resolve, reject) => {
    return resolve();
    })
   }

console.log(promise);