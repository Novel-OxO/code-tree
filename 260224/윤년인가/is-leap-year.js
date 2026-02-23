function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let year = input();
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  console.log(isLeapYear ? "true" : "false");
}

main();
