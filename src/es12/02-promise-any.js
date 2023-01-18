const promise1 = new Promise( (resolve, reject) => resolve('resolve 1') );
const promise2 = new Promise( (resolve, reject) => reject('reject 1') );
const promise3 = new Promise( (resolve, reject) => resolve('resolve 2') );

// Promise.any devuelve la primera promesa que se ejecute bien
Promise.any( [ promise1, promise2, promise3 ] )
    .then( e => console.log( e ) );

// Promise.allSettled( [ promise1, promise2, promise3 ] )
//     .then( e => console.log( e ) );