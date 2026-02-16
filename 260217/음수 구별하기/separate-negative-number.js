function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim().split("\n");
  return input;
}

function main() {
  const num = Number(input());
  console.log(num);
  if (num < 0) {
    console.log("minus");
  }
}

main();
