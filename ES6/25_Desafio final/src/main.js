 const exemplo = {
    usuario: 'clesiorods',
    nome: 'Clesino de Araujo Rodrigues',
    avatar: 'https://avatars0.githubusercontent.com/u/20101892?v=4'
} 
 
var botao = document.querySelector('button#botao');






let ulElement = document.querySelector('ul#lista');

 class api {
     constructor(exemplo) {
         this.lista = [exemplo];
     }
     
     render() {
         ulElement.innerHTML = '';
        this.lista.forEach(element => {
            let liElement = document.createElement('li');
            let img = document.createElement('img');
            let strong = document.createElement('strong');
            let a = document.createElement('a');
            let p = document.createElement('a');

            img.setAttribute('src', element.avatar);
            strong.innerHTML = element.usuario;
            a.innerHTML = 'Acessar';
            a.setAttribute('target', 'blank');
            a.setAttribute('href', `https://github.com/ ${element.usuario}`);
            p.innerHTML = '<br>' + element.nome + '<br/>';

            liElement.appendChild(img);
            liElement.appendChild(strong);
            liElement.appendChild(p);
            liElement.appendChild(a);
            ulElement.appendChild(liElement);
        });
     }
     adicionar() {
         axios.get('https://api.github.com/users/' + document.querySelector('input#intText').value)
            .them ((msg) => {
                console.log(msg);
            })
            .catch((msg) => {
                console.log(msg)
            })
     }
 }

var a = new api(exemplo);
botao.addEventListener('click', a.adicionar);


a.render();
