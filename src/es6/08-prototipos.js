// JavaScript es un lenguaje orientado a objetos pero basado en prototipos
// POO 
// -> clases - módelo a seguir
// -> objeto - es una instancia de una clase
//      -> atributos - es una característica o propiedad del objeto (variables dentro de un objeto)
//      -> métodos - son las acciones que un objeto puede realizar (funciones dentro de un objeto)

// Prototipo -> es un mecanismo por el cual un objeto puede heradar de un objeto padre atributos y métodos

// Objetos literales
// const animal = {
//     name: 'Snoopy',
//     sonar() {
//         console.log(`Hago sonidos porque stoy vivo`);
//     }
// }

// const animal2 = {
//     name: 'Lola Bunny',
//     sonar() {
//         console.log(`Hago sonidos porque stoy vivo`);
//     }
// }

// console.log(animal);
// console.log(animal2);

// Función constructora -> solo se crea una vez
// Función constructora donde se asigna los métodos al
// prototipo, y no a la función como tal.
function Animal(name, genrer) 
{
    // Atributos
    this.name = name;
    this. genrer = genrer;

    // Métodos
    this.sonar = function () {
        console.log(`Hago sonidos porque estoy vivo`);
    }
}
// forma correcta de pasar los métodos a la función constructora
Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.name}`);
}


const snoopy = new Animal('Snoopy', 'Mccho'),
      lolaBunny = new Animal('Lola Bunny', 'Hembra');

console.log({
    snoopy, lolaBunny
});
