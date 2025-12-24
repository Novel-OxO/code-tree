const fs = require("fs");
const c = fs.readFileSync(0).toString().trim();

const words = ["apple", "banana", "grape", "blueberry", "orange"];
let count = 0;

for (let word of words) {
  if (word[2] === c || word[3] === c) {
    count++;
    console.log(word);
  }
}

console.log(count);
