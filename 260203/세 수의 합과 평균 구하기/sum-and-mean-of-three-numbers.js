const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const sum = a + b + c;
const avg = parseInt(sum / 3);

console.log(sum);
console.log(avg);
