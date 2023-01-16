// strig padding
const greeting = 'Hello';

console.log( greeting.padStart(6, '_') );
console.log( greeting.padStart(8, '_-') );
console.log( greeting.padStart(10, '=*/') );

console.log( greeting.padEnd(8, '*/-') );