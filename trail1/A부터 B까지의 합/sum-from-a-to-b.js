const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const [a, b] = input.split(" ").map((line) => parseInt(line.trim()));

let sum = 0;

for (let i = a; i <= b; i++) {
  sum += i;
}

console.log(sum);
