async function* generator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

let y = generator();
y.next().then( response => console.log( response ) );
y.next().then( response => console.log( response.value ) );

async function array(arra) {
    for await ( let i of arra ){
        console.log(i);
    }
}
console.log('Start');
array([1, 2, 3, 4]);
console.log('End');

// function ahorrar() {
//     let suma = 0;
//     const cants = [];
//     return function sumar(money) {
//         suma = suma +money;
//         cants.push(money);
//         return { suma, cants };
//     }
// }

// const a = ahorrar();
// a(1000);
// console.log(a(100));
// a(500);
// console.log(a(350));