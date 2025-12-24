const fs = require("fs");
const numbers = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let count3 = 0;
let count5 = 0;

for (let number of numbers) {
  if (number % 3 === 0) {
    count3++;
  }

  if (number % 5 === 0) {
    count5++;
  }
}

console.log(`${count3} ${count5}`);