const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = [];

for(let i = 0; i < 4; i++) {
  arr.push(input[i].split(' ').map(Number));
}

for(let i = 0; i < 4; i++) {
  let sum = arr[i].reduce((a, b) => a + b, 0);
  console.log(sum);
}
