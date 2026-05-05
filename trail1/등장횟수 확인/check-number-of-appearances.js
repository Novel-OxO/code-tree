const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const lines = input.split("\n");
const numbers = lines.map((line) => parseInt(line.trim()));

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}

console.log(count);
