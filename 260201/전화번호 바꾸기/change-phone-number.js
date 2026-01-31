const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split("-");

console.log(`${a}-${c}-${b}`);
