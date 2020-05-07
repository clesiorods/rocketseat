var in_user = document.querySelector('input#username');
var in_botao = document.querySelector('input#botao');
var dados = document.querySelector('div#dados');
var img = document.querySelector('img#img');

in_botao.addEventListener('click', buscar);


function buscar() {
    dados.innerHTML = dados.innerHTML + '<h2> Aguarde... <h2>';

    axios.get('https://api.github.com/users/' + in_user.value)
        .then((dataRequest) => {
            img.src = dataRequest.data.avatar_url;
            console.log(dataRequest.data.avatar_url);
            dados.innerHTML = '';
            dados.append(img);
            dados.append(dataRequest.data.avatar_url);
        })
        .catch((erro) => {
            console.warn('Erro da requisição');
        })
}