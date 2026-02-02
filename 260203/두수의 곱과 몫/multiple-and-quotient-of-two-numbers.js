const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${parseInt(a / b)}`);
