const fs = require("fs");
const [input, c] = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = input.split(" ").map(Number);

console.log(`${a} ${b} ${c}`);
