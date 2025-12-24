function check(number) {
  return number % 2 === 0 || number % 3 === 0 || number % 5 === 0;
}

const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());
let count = 0;

for (let i = 1; i <= N; i++) {
  if (!check(i)) {
    count++;
  }
}

console.log(count);
