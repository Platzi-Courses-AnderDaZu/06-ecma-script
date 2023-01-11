// enhanced object literals -> para el caso que se quiera retornar dentro de un objeto la llave a como se llama el parametro definido en la función, solo basta con escribir el nombre del parametro en el objeto y JS automaticamente crea la llave con el nombre de dicho parametro, además de asigarle el valor correspondiente.

function newUser(user, age, country, uId) {
    return {
        user, age, country,
        id: uId
    };
}

console.log( newUser('Ander', 25, 'CO', 5) );