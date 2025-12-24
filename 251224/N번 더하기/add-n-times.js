const fs = require("fs");
let [a, n] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = a;

for (let i = 0; i < n; i++) {
  sum += n;
  console.log(sum);
}
