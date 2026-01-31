const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const sum = a + b;
console.log(`${sum.toFixed(2)}`);
