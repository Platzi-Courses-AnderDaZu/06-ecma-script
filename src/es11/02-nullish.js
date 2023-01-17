// const anotherNumber = 1; // 1
// const anotherNumber = 0; // 0
// const anotherNumber = ''; // 
const anotherNumber = null; // 5

// el operador ?? valida cuando un valor a su izquierda llega null
const validate = anotherNumber ?? 5;

console.log( validate );