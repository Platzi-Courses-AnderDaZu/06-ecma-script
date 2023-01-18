// busca la palabra apple dentro de un string
const regex = /\b(Apple)+\b/g;

const fruits = 'Banana, Kiwi, Apple, Orange, Pear';

// 
for( const match of fruits.matchAll(regex) ){
    console.log(match);
}
// [
//     'Apple',
//     'Apple',
//     index: 14,
//     input: 'Banana, Kiwi, Apple, Orange, Pear',
//     groups: undefined
// ]