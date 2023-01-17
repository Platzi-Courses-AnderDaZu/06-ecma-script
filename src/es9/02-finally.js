// Finallly

const anotherFn = ( value ) => {
    if( value == 0 ) return Promise.reject('Whopps!');

    return new Promise( (resolve, reject) => {
        resolve('Hi there!');
    } );
}

anotherFn(1)
    .then( e => {
        console.log(e);
        return anotherFn(1); 
    })
    .then( e => {
        console.log(e)
        return anotherFn(2); 
    })
    .catch( e => console.log(e) )
    .finally( () => console.log('Finally') );