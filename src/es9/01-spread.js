let user = {
    username: 'Ander',
    age: 26,
    country: 'CO'
}
user.country = 'MX';

let { username, ...values } = user;

user['username'] = 'Ander3';
user.age = 27;

username = 'Ander2';

console.log(user);
console.log(username);
console.log(values);