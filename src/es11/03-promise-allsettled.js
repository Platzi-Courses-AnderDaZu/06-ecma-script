const promise1 = new Promise( (resolve, reject) => resolve('resolve') );
const promise2 = new Promise( (resolve, reject) => resolve('reject') );
const promise3 = new Promise( (resolve, reject) => resolve('resolve 2') );

// allSettled -> Ejecuta todas las promesas sin importar si son rechazadas o no.

Promise.allSettled([ promise1, promise2, promise3 ])
    .then( object => console.log(object) );

// El método Promise.all(iterable) devuelve una promesa que termina correctamente 
// cuando todas las promesas en el argumento iterable han sido concluídas con éxito, 
// o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.

// Promise.all([ promise1, promise2, promise3 ])
//     .then( object => console.log(object) )
//     .catch( console.log('Alguna fallo') );