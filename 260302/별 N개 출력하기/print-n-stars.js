function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let n = input();
  let i = 1;

  while (i <= n) {
    console.log("*");
    i++;
  }
}

main();
