const fs = require("fs");
let [N, numbers] = fs.readFileSync(0).toString().trim().split("\n");
N = Number(N);
numbers = numbers.split(" ").map(Number);

console.log(
  numbers
    .map(Number)
    .map((num) => num * num)
    .join(" ")
);
