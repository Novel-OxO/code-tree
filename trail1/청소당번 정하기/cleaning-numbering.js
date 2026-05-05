const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const day = parseInt(input.trim());

let count12 = 0;
let count3 = 0;
let count2 = 0;

for (let i = 1; i <= day; i++) {
  if (i % 12 === 0) {
    count12++;
    continue;
  }

  if (i % 3 === 0) {
    count3++;
    continue;
  }

  if (i % 2 === 0) {
    count2++;
    continue;
  }
}

console.log(`${count2} ${count3} ${count12}`);