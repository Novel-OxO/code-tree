function score(input) {
  if (input >= 90) {
    return "A";
  }

  if (input >= 80) {
    return "B";
  }

  if (input >= 70) {
    return "C";
  }

  if (input >= 60) {
    return "D";
  }

  return "F";
}

const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());
let result = "";

for (let i = N; i <= 100; i++) {
  result += score(i) + " ";
}

console.log(result);
