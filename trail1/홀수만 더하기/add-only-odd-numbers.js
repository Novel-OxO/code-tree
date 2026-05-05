const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const lines = input.split("\n");
const numbers = lines.filter((_, index) => index !== 0).map(Number);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1 && numbers[i] % 3 === 0) sum += numbers[i];
}

console.log(sum);
