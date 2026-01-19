const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const a = Number(input);
const result = a + 1.5;

console.log(result.toFixed(2));
