const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let result = "";

// i = 0일 때  n = 3일 경우 j = 1
// i = 1일 때  n = 3일 경우 j = 3
// i = 2일 때  n = 3일 경우 j = 5

for (let i = 0; i < n; i++) {
  for(let j = 0; j < 2 * i + 1; j++) {
    result += "*"; 
  }
  result += "\n";
}

console.log(result);
