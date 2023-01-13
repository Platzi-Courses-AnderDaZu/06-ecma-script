import content from "./11-module-part1.js";

const hi = content.hello();
const per = new content.Person('Ander', 'Daza', 10, 'Developer');
per.saludar();

class Developer extends content.Person {
    constructor(name, lastname, age, title, salary){
        super(name, lastname, age, title);
        this.salary = salary;
    }
    cantidad(){
        console.log(`I'm ${this.name} y gano $${this.salary}`);
    }
}

const dev1 = new Developer('Anderson', 'Daza', 25, 'Developer', 50000);
dev1.cantidad();
// console.log(hi);