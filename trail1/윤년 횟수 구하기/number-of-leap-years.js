const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const n = parseInt(input.trim());

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

let count = 0;

for (let i = 1; i <= n; i++) {
  if (isLeapYear(i)) {
    count++;
  }
}

console.log(count);
