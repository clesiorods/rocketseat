function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

//EXEMPLO DE DESESTRUTURAÇÃO 

const cidade = {
    nHabitantes: 10000,
    area: 23112,
    nome: "Natal"
}

const {nHabitantes, area, nome} = cidade;

console.log(nHabitantes, area, nome);