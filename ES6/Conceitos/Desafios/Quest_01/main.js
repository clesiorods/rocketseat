document.querySelector("body").style.backgroundColor = "grey"

class Usiario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
    
    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usiario {
    constructor() {
        super();
        this.admin = true;
    }
}

const user01 = new Usiario('clesio@gmail0', 'password');
const adm01 = new Admin('admin@gmail', 'password10');

console.log(user01.isAdmin());
console.log(adm01.isAdmin());