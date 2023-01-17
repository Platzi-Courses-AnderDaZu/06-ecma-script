const entries = new Map([ ['name', 'Oscar'], [ 'age', 34 ] ]);

console.log( typeof entries );
// object
console.log( entries );
// Map(2) { 'name' => 'Oscar', 'age' => 34 }

const entries2 = Object.fromEntries( entries );

console.log( typeof entries2 );
// object
console.log( entries2 );
// { name: 'Oscar', age: 34 }

const en1 = [ [ 'name', 'Ander' ], [ 'age', 25 ] ];

console.log(en1);
// [ [ 'name', 'Ander' ], [ 'age', 25 ] ]
console.log( Object.fromEntries(en1) );
// { name: 'Ander', age: 25 }