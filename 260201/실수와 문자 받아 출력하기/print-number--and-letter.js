const fs = require("fs");
const inputs = fs.readFileSync(0).toString().trim().split("\n");
const c = inputs[0];
const [a, b] = [inputs[1], inputs[2]].map(Number);

console.log(c);
console.log(a.toFixed(2));
console.log(b.toFixed(2));
