var lastname = 'Ander'; // declarar y asignar
lastname = 'Duo'; // reasignar

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar

const animal = 'Dog'; // declarar y asignar
animal = 'Cat'; // En este caso ya no se puede reasignar una constante

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Pear'; // block scope
    }
    console.log({
        fruit1,
        fruit2,
        fruit3
    });
}