// arrays destructuring
let fruits = ['apple', 'banana', 'pear'];
let [a, b, c] = fruits;
console.log({
    a, b, c
});

// object destructuring
let user = {
    username: 'Ander',
    age: 25,
    phone: '3216554'
}

let {phone, age} = user;
let {username} = user;

console.log({
    user, phone, age, username
});

// spread operator

let person = {
    name: 'Ander',
    age: 25
};
let country = 'CO';

let data = { id: 1, ...person, country };

console.log({
    person, country, data
});

data['name'] = 'Ander2';

console.log({
    person, country, data
});

let numbers = [1 ,2, 3, 4, 5];
let copyNumbers1 = numbers; // para copiar y luego editar no se recomienda esta forma
let copyNumbers2 = [ ...numbers ]; // para copiar y luego editar se recomienda esta forma

console.log({
    numbers, copyNumbers1, copyNumbers2
});

copyNumbers1[0] = 10; // forma incorrecta, ya que modifica al array original (numbres)
copyNumbers2[0] = 20; // forma correcta

console.log({
    numbers, copyNumbers1, copyNumbers2
});

// rest
function sumar(a = 0, ...elements) 
{
    console.log({
        a, elements
    });
    
    let suma = a;
    elements.map( e => {
        suma = suma + e;
        return suma;
    } );

    let suma2 = a;
    let total = elements.reduce( (a, b) =>  a + b );
    suma2 += total;

    console.log({ suma, suma2 });
}

sumar(1, 2, 3, 4);

// Resultado
// { a: 1, elements: [ 2, 3, 4 ] }
// { suma: 10, suma2: 10 }