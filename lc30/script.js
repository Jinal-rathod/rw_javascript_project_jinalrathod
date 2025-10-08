// Javascript constructor function

function Person(){
  this.name = "John",
  this.age = 25
}

const person = new Person()

console.log(person.name);
console.log(person.age);
console.log(person);

// constructor function

function People(){
  this.name = "Rakesh",
  this.age = 20

  this.greet = function(){
    console.log("Hello");
  }
}

const person1 = new People()

console.log(person1.name);
console.log(person1.age);
console.log(person1.greet());

// constructor function with parameter

function Greet(name , age , gender){
  this.name = name,
  this.age  = age,
  this.gender = gender

  this.person = function(){
    console.log(`Hi ${this.name}`);
  }
}

let result = new Greet("Dax" , 23 , "male")

console.log(result.person());

// Javascript function Closures

function greet(name){
  function d_name(){
    console.log("hi" + " " + name);
  }

  return d_name
}

const result1 = greet("Red and White")

console.log(result1());


function greets(){
  let name = "javascript"

  function d_name(){
    return "Hi" + " " + name
  }

  return d_name
}

const result3 = greets()

console.log(result3());

let count = 0
function sum(){
  function increment(){
    return count = count + 1
  }

  return increment
}

const result4 = sum()

console.log(result4());
console.log(result4());
console.log(result4());
console.log(result4());