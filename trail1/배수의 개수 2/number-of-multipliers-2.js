const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const lines = input.trim().split("\n");
const numbers = lines.map((line) => parseInt(line));

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    count++;
  }
}

console.log(count);
