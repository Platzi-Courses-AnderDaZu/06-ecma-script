// const datos = [
//     {
//         id: 1,
//         title: 'Iron Man',
//         year: 2008
//     },
//     {
//         id: 2,
//         title: 'Spiderman: Homecoming',
//         year: 2017
//     },
//     {
//         id: 3,
//         title: 'Avengers: Endgame',
//         year: 2019
//     }
// ];

// const getDatos = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             resolve(datos);
//         }, 3500 );
//     });
// }

// getDatos()
//     .then( info => console.log(info) );

function cuadradoPromise(value) 
{
    if ( typeof value !== 'number' ) return Promise.reject(`Error, el valor ${value} ingresado no es un número`);

    let number = 0 | Math.random()*1000;
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve( {
                number,
                value,
                result: value * value
            } );
        }, number );
    } );
}

cuadradoPromise(0)
    .then( (object) => {
        console.log(`Inicia promise`);
        console.log( { result: object } );
        return cuadradoPromise(1);
    } )
    .then( object => {
        console.log(`Inicia promise`);
        console.log( { result: object } );
        return cuadradoPromise(2);
    } )
    .then( object => {
        console.log(`Inicia promise`);
        console.log( { result: object } );
        return cuadradoPromise('5');
    } )
    .then( object => {
        console.log(`Inicia promise`);
        console.log( { result: object } );
        return cuadradoPromise(4);
    } )
    .catch( error => console.error(error) );