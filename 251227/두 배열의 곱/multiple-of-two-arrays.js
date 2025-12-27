const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .filter((v) => v !== "");

let arr1 = [];
let arr2 = [];

for (let i = 0; i < 3; i++) {
  arr1.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < 3; i++) {
  arr2.push(input[i + 3].split(" ").map(Number));
}

let result = "";

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    result += arr1[i][j] * arr2[i][j] + " ";
  }
  result += "\n";
}

console.log(result);
