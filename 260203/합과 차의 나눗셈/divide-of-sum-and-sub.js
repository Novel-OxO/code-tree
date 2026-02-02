const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const c = a + b;
const d = a - b;
const result = (c /d).toFixed(2);
console.log(result);

