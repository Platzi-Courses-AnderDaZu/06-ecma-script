class User {
    constructor(username, age){
        this.username = username;
        this.age = age;
    }
    // # -> almoadilla hace que una función sea de tipo privado
    #hello(){
        return 'Hi there,';
    }
    greeting(){
        console.log(`${this.#hello()} I'm ${this.username}`);
    }
    get getAge(){
        return this.age;
    }
    set #setAge(newAge){
        this.age = newAge;
    }
}

const user1 = new User('Ander', 25);
user1.greeting();
console.log( user1.getAge );
// user1.setAge = 26;
// console.log( user1.getAge );