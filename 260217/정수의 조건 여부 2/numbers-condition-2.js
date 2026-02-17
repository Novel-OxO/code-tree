function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  let a = input();

  if (a === 5) {
    console.log("A");
  }

  if (a % 2 === 0) {
    console.log("B");
  }
}

main();
