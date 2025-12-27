const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] *= 3;
  }
}

let result = "";

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    result += arr[i][j] + " ";
  }
  result += "\n";
}

console.log(result);
