const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

var mapa = usuarios.map((valor) => {
   return valor.idade;
}) 
//console.log(mapa);

var filtro = usuarios.filter((valor) => {
    return (valor.empresa == 'Rocketseat' && valor.idade > 18);
})
//console.log(filtro);

var encontre = usuarios.find((valor) => {
    return valor.empresa == 'Facebook';
})
//console.log(encontre);

var metade50 = usuarios.map((valor) => {
    valor.idade = valor.idade*2;
})
var metade50 = usuarios.filter((valor) => {
    return valor.idade < 50;
})
//console.log(metade50);