document.querySelector('body').style.backgroundColor = 'grey';

axios.get('https://api.github.com/users/clesiorods')
    .then((msg) => {
        console.log(msg);

    })
    .catch((erro) => {
        console.warn(erro);
    })