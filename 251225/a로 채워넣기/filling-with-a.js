const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let answer = input[0] + 'a' + input.slice(2, input.length - 2) + 'a' + input[input.length - 1];
console.log(answer);