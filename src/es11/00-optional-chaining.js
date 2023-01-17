// optional chaining
const users = {
    ander: {
        age: 20
    },
    tania: {
        age: 22
    }
}

console.log( users.ander );
// { age: 20 }
console.log( users.ander.age );
// 20
console.log( users.ander.phone );
// undefined
console.log( users.luis );
// undefined
console.log( users.luis?.phone.workk ); // forma correcta
// undefined
console.log( users?.luis?.phone ); // se abusa del encadenamiento
// undefined
console.log( users.luis.phone );
// TypeError: Cannot read properties of undefined (reading 'phone')