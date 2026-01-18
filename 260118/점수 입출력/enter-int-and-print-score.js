const fs = require("fs");
const score = Number(fs.readFileSync(0).toString().trim());

console.log(`Your score is ${score} point.`);
