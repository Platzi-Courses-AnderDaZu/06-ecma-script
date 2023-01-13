// las clases no recibe parámetros
class Animal {
    // El objeto es un método especial que se ejecuta
    // en el momento de instanciar una clase
    constructor(name, genrer){
        this.name = name;
        this.genrer = genrer;
    }

    // Métodos
    saludar(){
        console.log(`Hola soy ${this.name}`);
    }
}

class Perro extends Animal {
    constructor(name, genrer, tamanio){
        // con el método super() se manda a llamar
        // el constructor de la clase padre
        super(name, genrer);
        this.tamanio = tamanio;
    }
    saludar(){
        console.log(`Soy un perro y mi sonido es ladrar`);
    }
    ladrar(){
        console.log(`Guauu guauuu!`);
    }
}

const mimi = new Animal('Mimi', 'Hembra');
const scooby = new Perro('Scooby', 'Macho', 'Gigante');

console.log(mimi);
console.log(mimi.saludar());

console.log(scooby);
console.log(scooby.saludar());