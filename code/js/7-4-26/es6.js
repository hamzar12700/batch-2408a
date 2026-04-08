// Destructuring
const arr = [1,2,3];
const [a,b] = arr;
console.log(a,b);

// Rest & Spread
const arr2 = [...arr,4,5];
function sum(...nums){ return nums.reduce((acc,n)=>acc+n,0);}
console.log(sum(1,2,3,4));

// Module Example (React uses imports)
export const PI = 3.14;