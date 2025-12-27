const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let arr = [];

for (let i = 0; i < N; i++) {
  let cnt = 1;
  let temp = [];

  for (let j = 0; j < N; j++) {
    temp.push(cnt);
    cnt++;
  }

  if (i % 2 === 0) {
    arr.push(temp);
  } else {
    arr.push(temp.reverse());
  }
}

let result = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    result += arr[i][j];
  }
  result += "\n";
}

console.log(result);
