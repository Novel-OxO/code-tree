const fs = require('fs');
let [a, b] = fs.readFileSync(0)
               .toString()
               .split(" ")
               .map(Number);

let sum = a + b;
let avg = sum / 2;

console.log(sum, avg.toFixed(1));