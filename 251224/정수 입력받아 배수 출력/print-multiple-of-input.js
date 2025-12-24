const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());
const loopCount = 5;
let currentNumber = N;
let result = '';

for (let i = 0; i < loopCount; i++) {
    result += currentNumber + ' ';
    currentNumber += N;
}

console.log(result);
