const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

let arr1 = [];
let arr2 = [];

for (let i = 1; i <= N; i++) {
  arr1.push(input[i].split(" ").map(Number));
}

for (let i = N + 1; i < input.length; i++) {
  arr2.push(input[i].split(" ").map(Number));
}

let same = [];
for (let i = 0; i < N; i++) {
  same.push(Array(M).fill(0));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr1[i][j] === arr2[i][j]) {
      same[i][j] = 0;
    } else {
      same[i][j] = 1;
    }
  }
}

let result = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result += same[i][j] + " ";
  }
  result += "\n";
}

console.log(result);
