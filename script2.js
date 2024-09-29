
class PersonClass {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }


    getSummary = () => `${this.name} is ${this.age} years old and lives in ${this.city}.`;

    
    static greet = () => 'Hello from the Person class!';
}

const person1 = new PersonClass('Shreya', 19, 'Mumbai');
console.log(person1.getDetails()); 
console.log(person1.getSummary()); 
console.log(PersonClass.greet()); 
