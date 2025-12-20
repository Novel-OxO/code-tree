const fs = require('fs')
let [a, b] = fs.readFileSync(0)
               .toString()
               .split(' ')
               .map(Number);

console.log(a >= b ? 1 : 0);
console.log(a > b ? 1 : 0);
console.log(b >= a ? 1 : 0);
console.log(b > a ? 1 : 0);
console.log(a === b ? 1 : 0);
console.log(a !== b ? 1 : 0);