var in_user = document.querySelector('input#username');
var in_botao = document.querySelector('input#botao');
var dados = document.querySelector('div#dados');
var img = document.querySelector('img#img');
var lista = document.querySelector('ul#itens');

in_botao.addEventListener('click', buscar);


function buscar() {

    axios.get('https://api.github.com/users/' + in_user.value + '/repos')
        .then((dataRequest) => {

            lista.innerHTML = '';

            for(rep in dataRequest.data) {
                var novo_li = document.createElement('li');
                novo_li.innerHTML = dataRequest.data[rep].name;
                lista.appendChild(novo_li);
            }
        })
        .catch((erro) => {
            console.warn('Erro da requisição');
        })
    axios.get('https://api.github.com/users/' + in_user.value)
        .then((receb) => {
            img.src = receb.data.avatar_url;
            console.log(receb.data.avatar_url);
        })
        .catch((erro) => {
            console.log('Erro no pedido do avatar');
        })
}
