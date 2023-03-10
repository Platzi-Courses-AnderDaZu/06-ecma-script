// Flat
const arra = [ 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9, [ 10, 11, 12 ] ] ] ];

console.log(arra.flat(1)); 
// [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, [ 10, 11, 12 ] ] ]
console.log(arra.flat(2)); 
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11, 12 ] ]
console.log(arra.flat(3));
// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
//  ]

// =============================================================
// =============================================================

// Flatmap
const arra2 = [ 1, 2, 3, 4, 5 ];
console.log( arra2.flatMap( e => [ e, e * 2 ] ) );
// [
//   1, 2, 2, 4,  3,
//   6, 4, 8, 5, 10
// ]