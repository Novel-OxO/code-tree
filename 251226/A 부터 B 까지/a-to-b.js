const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let result = `${a} `;

while (a < b) {
  if (a % 2 === 1) {
    a *= 2;
  } else {
    a += 3;
  }

  if (a <= b) {
    result += `${a} `;
  }
}

console.log(result);
