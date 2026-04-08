const student = {
  name: "Ali",
  age: 20,
  subjects: ["HTML", "CSS", "JS"]
};

// Destructuring
const { name, subjects } = student;
console.log(name, subjects);

// Spread operator
const newStudent = { ...student, grade: "A" };
console.log(newStudent);

// Optional chaining
console.log(student.address?.city); // undefined