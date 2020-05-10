document.querySelector('body').style.backgroundColor = 'grey';

var minhaPromise = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/clesiorods');
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Erro na requisição!');
            }
        }
    }
});

minhaPromise
    .then((msg) => {
        console.log('Sucesso!');
        console.log(msg);
    })
    .catch((erro) => {
        console.warn(erro);
    })