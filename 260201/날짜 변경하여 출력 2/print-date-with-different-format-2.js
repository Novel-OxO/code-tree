const fs = require("fs");
const [mm, dd, yyyy] = fs.readFileSync(0).toString().trim().split("-");

console.log(`${yyyy}.${mm}.${dd}`);
