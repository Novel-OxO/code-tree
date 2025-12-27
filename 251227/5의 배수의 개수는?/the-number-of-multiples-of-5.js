const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = [];

for(let i = 0; i < 4; i++) {
  arr.push(input[i].split(' ').map(Number));
}

let count = 0;

for(let i = 0; i < 4; i++) {
  for(let j = 0; j < 4; j++) {
    if(arr[i][j] % 5 === 0) {
      count++;
    }
  }
}

console.log(count);