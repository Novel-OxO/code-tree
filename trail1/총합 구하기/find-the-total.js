const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const [a, b] = input.split(" ").map(Number);
const numbers = Array.from({ length: b - a + 1 }, (_, i) => a + i);

let sum = numbers
  .filter((num) => num % 6 === 0 && num % 8 !== 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum);
