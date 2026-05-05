const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const numbers = input.trim().split('\n').map(Number);

let sum = 0;
let count = 0;

for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0 && numbers[i] <= 200) {
    sum += numbers[i];
    count++;
  }    
}

console.log(`${sum} ${(sum / count).toFixed(1)}`);
