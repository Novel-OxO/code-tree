const fs = require("fs");
const [first, last] = fs.readFileSync(0).toString().trim().split("-");

console.log(`${first}${last}`)
