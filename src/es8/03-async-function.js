const fnAsync = () => {
    let time = Math.random() * 1000;
    return new Promise( (resolve, reject) => {
        ( true )
            ? setTimeout( () => resolve({result: 'Async!!!', time}), time )
            : reject( new Error('Error') );
    });
}

const anotherFn = async () => {
    console.log('Inicio de Ejecución async');
    const awa = await fnAsync();
    console.log(awa);
    console.log('Siguiente');
    const awa2 = await fnAsync();
    console.log(awa2);
    console.log('Fin de Ejecución async');
}

console.log('Before');
anotherFn();
console.log('After');

