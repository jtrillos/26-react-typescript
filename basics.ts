// Primitives: number, strings, boolean
// more complex types: arrays, objects
// function types, parameters

// primitives

let age: number = 24;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// more complex types

let hobbies: string[];

hobbies = ["Sport", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

/*
person = {
    isEmployee: true
};
*/

let people: {
  name: string;
  age: number;
}[];

// type inference

// union type
let course: string | number = "react - the complete guide";

course = 123;

// type aliases
type Person1 = {
  name: string;
  age: number;
};

let person1: Person1;

person1 = {
  name: "Max",
  age: 32,
};

let people1: Person1[];

// functions & types

function add(a: number, b: number): number {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

