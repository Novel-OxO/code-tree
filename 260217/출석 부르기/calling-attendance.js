function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  const n = input();

  if (n === 1) {
    console.log("John");
  } else if (n === 2) {
    console.log("Tom");
  } else if (n === 3) {
    console.log("Paul");
  } else {
    console.log("Vacancy");
  }
}

main();
