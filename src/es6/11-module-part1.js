class Person {
    constructor(name, lastname, age, title){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.title = title;
    }

    saludar(){
        console.log(`Hi there!, I'm ${this.name}`);
    }
}

const hello = () => {
    console.log(`Hi there!`);
}

export default {hello, Person};