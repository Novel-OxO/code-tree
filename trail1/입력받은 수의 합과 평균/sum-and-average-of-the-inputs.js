const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const lines = input.trim().split("\n");
const n = Number(lines[0]);
const numbers = lines.filter((_, index) => index !== 0).map(Number);

let sum = numbers.reduce((acc, cur) => acc + cur, 0);
let avg = sum / n;

console.log(`${sum} ${avg.toFixed(1)}`);
