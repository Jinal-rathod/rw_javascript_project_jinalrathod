// Class in Javascript

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  name() {
    console.log(`My name is ${this.name}`);
  }
  age() {
    console.log(`My age is ${this.age}`);
  }
}

const person1 = new Person("Jinal", 23);

person1.name();