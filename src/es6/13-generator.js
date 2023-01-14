function* iterate(array) {
    for (const iterator of array) {
        yield iterator;
    }
}

const it = iterate([1, 2]);
console.log(it.next().value);
// console.log(it.next().done);
console.log(it.next().value);
// console.log(it.next().done);
console.log(it.next().value);
// console.log(it.next().done);

function cuadrado(valor) {
    let time = Math.random() * 10000;
    setTimeout( () => {
        return console.log({
            valor, 
            result: valor * valor, 
            time
        });
    }, time );
}
function* generador() {
    console.log(`Inicia generador`);
    for (let i = 0; i < 6; i++) {
        yield cuadrado(i);
    }
    // yield cuadrado(1);
    // yield cuadrado(2);
    // yield cuadrado(3);
    // yield cuadrado(4);
    // yield cuadrado(5);
    console.log(`Finaliza generador`);
}
let gen = generador();

for (let y of gen) {
    y;
}

function cuadrado2(valor) {
    let time = Math.random() * 10000;
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve({
                valor, 
                result: valor * valor, 
                time
            });
        }, time );
    } );
}
function* generador2() {
    console.log(`Inicia generador`);
    yield cuadrado2(0)
            .then( e => {
                console.log({e});
                return cuadrado2(1);
            })
            .then( e => {
                console.log(e);
                return cuadrado2(2);
            } );
    // yield cuadrado2(2).then( e => e );
    // yield cuadrado2(3).then( e => e );
    // yield cuadrado2(4).then( e => e );
    // yield cuadrado2(5).then( e => e );
    console.log(`Finaliza generador`);
}
let gen2 = generador2();

for (let y of gen2) {
    // console.log(y);
    y;
}

