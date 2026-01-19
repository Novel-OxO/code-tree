const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

console.log(n.toFixed(2));
