const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const [a, b] = input.split(" ").map(Number);

let sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);
