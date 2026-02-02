const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const sum = a + b + c;
const avg = sum / 3;
const diff = sum - avg;

console.log(sum);
console.log(avg);
console.log(diff);
