function Animal(name, genrer) 
{
    // Atributos
    this.name = name;
    this. genrer = genrer;

    // Métodos
    // this.sonar = function () {
    //     console.log(`Hago sonidos porque estoy vivo`);
    // }
}
// forma correcta de pasar los métodos a la función constructora
Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.name}`);
}
Animal.prototype.sonar = function () {
    console.log(`Hago sonidos porque estoy vivo`);
}

// Herencia prototípica
function Perro(name, genrer, tamanio) {
    this.super = Animal;
    this.super(name, genrer);
    this.tamanio = tamanio;
}
// perro está heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// sobreescritura de métodos del prototipo padre en el hijo
// para que se pueda sobreescribir un método este debe pasarse de forma correcta a la función constructora
Perro.prototype.sonar = function () {
    console.log(`Soy un perro y mi sonido es un ladrido`);
}
Perro.prototype.ladrar = function () {
    console.log(`Guauuu guauuuu!`);
}

const snoopy = new Perro('Snoopy', 'Macho', 'Mediano'),
      lolaBunny = new Animal('Lola Bunny', 'Hembra');

console.log({
    snoopy,
    lolaBunny
});