// arrays destructuring
let fruits = ['apple', 'banana', 'pear'];
let [a, b, c] = fruits;
console.log({
    a, b, c
});

// object destructuring
let user = {
    username: 'Ander',
    age: 25,
    phone: '3216554'
}

let {phone, age} = user;
let {username} = user;

console.log({
    user, phone, age, username
});