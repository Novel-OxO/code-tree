const fs = require("fs");
const [h, m] = fs.readFileSync(0).toString().trim().split(":");

console.log(`${h + 1}:${m}`);
