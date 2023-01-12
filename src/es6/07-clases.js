// Declarando una clase
class User {
    // métodos
    greeting() {
        return 'Hi there!';
    }

    // constructor
    constructor(){
        console.log('Nuevo usuario');
    }
}

// Instanciando una clase
const newUser = new User();
console.log(newUser);
console.log(newUser.greeting());

const developer = new User();
console.log(developer.greeting());