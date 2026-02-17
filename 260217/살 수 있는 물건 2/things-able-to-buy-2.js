function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  const n = input();

  if (n >= 3000) {
    console.log("book");
  } else if (n >= 1000) {
    console.log("mask");
  } else if (n >= 500) {
    console.log("pen");
  } else {
    console.log("no");
  }
}

main();
