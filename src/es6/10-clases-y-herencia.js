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
        this.raza = null;
    }
    saludar(){
        console.log(`Soy un perro y mi sonido es ladrar`);
    }
    ladrar(){
        console.log(`Guauu guauuu!`);
    }

    // un método estatico se puede ejecutar son necesidad de instanciar la clase
    static queEres(){
        console.log(`Los perros son animales`);
    }

    // los setter y getters son métodos especiales que nos permiten
    // establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
}

const mimi = new Animal('Mimi', 'Hembra');
const scooby = new Perro('Scooby', 'Macho', 'Gigante');

console.log(mimi);
console.log(mimi.saludar());

console.log(scooby);
console.log(scooby.saludar());
console.log(scooby.getRaza);
scooby.setRaza = 'Grán Danez'
console.log(scooby.getRaza);

Perro.queEres();