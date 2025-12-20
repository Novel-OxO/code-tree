const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim());

console.log(`Your score is ${input} point.`);