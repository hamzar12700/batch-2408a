const nums = [10, 20, 30];

// push/pop/shift/unshift
nums.push(40); // [10,20,30,40]
nums.pop();    // [10,20,30]
nums.unshift(5); // [5,10,20,30]
nums.shift();    // [10,20,30]

// slice & splice
console.log(nums.slice(1,3)); // [20,30]
nums.splice(1,1,25);          // [10,25,30]

// map, filter, find
const double = nums.map(n => n*2);
const over20 = nums.filter(n => n>20);
const firstOver20 = nums.find(n => n>20);

console.log(double, over20, firstOver20);