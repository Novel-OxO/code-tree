const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const sum = a + b;
const avg = (sum / 2).toFixed(1);

console.log(`${sum} ${avg}`);

