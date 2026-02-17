function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return input;
}

function main() {
  const n = input();

  if (n === "S") {
    console.log("Superior");
  } else if (n === "A") {
    console.log("Excellent");
  } else if (n === "B") {
    console.log("Good");
  } else if (n === "C") {
    console.log("Usually");
  } else if (n === "D") {
    console.log("Effort");
  } else {
    console.log("Failure");
  }
}

main();
