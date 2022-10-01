// function with a string parameter and default value
function sayHello (name : string = "World") {
    console.log("Hello " + name);
}

sayHello();
sayHello("TypeScript");

// function with an optional number parameter
function mamboNumber(n? : number) {
  console.log("Number: " + n);
}

mamboNumber();
mamboNumber(5);

// interface for persons
interface Person {
  name : string;
  age? : number;
}

// valid persons
let mj: Person = { name: "Manasés Jesús" };
let bs: Person = { name: "Britney", age: 19 };

// not valid
// let joe: Person = { firstName: "john", age: 75 };

// print the persons
console.log("Person: " + mj.name);
console.log(bs);

// type for personas
type Persona = {
  name : string;
  age? : number;
}

// valid personas
let mj2: Persona = { name: "Manasés Jesús" };
let bs2: Persona = { name: "Britney", age: 19, };

// print the personas
console.log("Persona: " + mj2.name);
console.log(bs2);
