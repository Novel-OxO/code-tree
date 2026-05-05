const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const [a, b] = input.split(" ").map(Number);

const min = Math.min(a, b);
const max = Math.max(a, b);

let sum = 0;

for (let i = min; i <= max; i++) {
  if (i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
