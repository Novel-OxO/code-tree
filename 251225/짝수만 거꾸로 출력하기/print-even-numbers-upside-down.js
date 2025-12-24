let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n');
arr = arr.split(' ').map(Number);
let reversed = arr.reverse();
let result = '';

for(let i = 0; i < n; i++) {
  if(reversed[i] % 2 === 0) {
    result += reversed[i] + ' ';
  }
}

console.log(result);