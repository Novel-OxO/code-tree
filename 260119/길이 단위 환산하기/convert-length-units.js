
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const ft = Number(input)
const cm = ft * 30.48
console.log(cm.toFixed(1))
