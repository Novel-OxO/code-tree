const fs = require("fs");
const inputs = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let index = 0;

while (true) {
  const input = inputs[index++];

  if (input > 25) {
    console.log("Lower");
  } else if (input < 25) {
    console.log("Higher");
  } else {
    console.log("Good");
    break;
  }
}
