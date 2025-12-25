const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result += "* ";
  }
  result += "\n";
}

console.log(result);
