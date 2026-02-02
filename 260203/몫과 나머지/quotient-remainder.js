const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const c = parseInt(a / b);
const d = a % b;

console.log(`${c}...${d}`);