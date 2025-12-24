const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [a, b] = input.split(' ').map(Number);

let result = '';

for(let i = b; i >= a; i--) {
    result += i + ' ';
}

console.log(result);