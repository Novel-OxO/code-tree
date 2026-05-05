const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const lines = input.trim().split("\n");
const numbers = lines.map((line) => parseInt(line));

let count3 = 0;
let count5 = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    count3++;
  }

  if (numbers[i] % 5 === 0) {
    count5++;
  }
}

console.log(`${count3} ${count5}`);
