const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

let result = "";

for (let i = 0; i < 8; i++) {
  result += input;
}

console.log(result);
