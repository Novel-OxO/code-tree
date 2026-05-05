const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const [a, b] = input.split(" ").map(Number);

let sum = 0;
let count = 0;

for (let i = a; i <= b; i++) {
  if (i % 5 === 0 || i % 7 === 0) {
    sum += i;
    count++;
  }
}

const avg = sum / count;

console.log(`${sum} ${avg.toFixed(1)}`);
