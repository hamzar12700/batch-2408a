// var sufiyan = "sufiyan"

// var aptech;



// function foo(a, b, c){
//     return a+ b + c
//     // return;
//     console.log("hello sufiyan , chai piyo gey ???");
    
// }


// var aptech = foo(2 , 4, 5 );
// console.log(aptech);




// alert()



// var name = "sufiyan"
// var name2 = name;
// name2 = "hamza"


// console.log(name2,"===> name 2");
// console.log(name,"===> name 1");



var std = {
    fullName : "Muhammad Sufiyan",
    fatherName : "Abdul Wahid",
    batch : "2408a",
    hobbies : ['cricket','coding','music']
}


var std2 = {...std}

std2.fullName = "Muhammad Junaid"
console.log(std2, "=====> std2");
console.log(std,"=====> original object");

// Object Creation
const student = {
  name: "Ali",
  age: 20,
  subjects: ["HTML", "CSS", "JS"]
};

// Accessing Properties
console.log(student.name); // Ali
console.log(student['age']); // 20

// Destructuring
const { name, age } = student;
console.log(name, age); // Ali 20

// Spread Operator
const newStudent = { ...student, grade: "A" };
console.log(newStudent);

// Optional Chaining
console.log(student.address?.city); // undefined (no error)






//=================================


const numbers = [10, 20, 30, 40];

// Push - add at end
numbers.push(50);
console.log(numbers); // [10, 20, 30, 40, 50]

// Pop - remove last
numbers.pop();
console.log(numbers); // [10, 20, 30, 40]

// Shift - remove first
numbers.shift();
console.log(numbers); // [20, 30, 40]

// Unshift - add at start
numbers.unshift(5);
console.log(numbers); // [5, 20, 30, 40]

// Slice - returns new array without changing original
const newArr = numbers.slice(1, 3); // index 1 to 2
console.log(newArr); // [20, 30]

// Splice - modify original array
numbers.splice(1, 2, 25, 35); // remove 2 items from index 1, add 25,35
console.log(numbers); // [5, 25, 35, 40]

// forEach - iterate
numbers.forEach((num) => console.log(num));

// map - returns new array
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [10, 50, 70, 80]

// filter - condition based
const bigNumbers = numbers.filter(num => num > 30);
console.log(bigNumbers); // [35, 40]

// find - first matching
const found = numbers.find(num => num > 25);
console.log(found); // 35



// functions

// Function Declaration
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(5, 10)); // 50

// Arrow Function
const subtract = (a, b) => a - b;
console.log(subtract(10, 5)); // 5

// Return keyword
function isEven(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4)); // true


