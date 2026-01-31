const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const result = a * b;
console.log(`${result}`);
