const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (let i = 0; i < n; i++) {
  // i = 0, n = 2일 경우 ()
  for(let j = 0; j < (n - i); j++) {
    result += "* ";
  }
  result += "\n";
}

console.log(result);