function input() {
  const fs = require("fs");
  let a = fs.readFileSync(0).toString().trim();
  return Number(a);
}

function main() {
  let a = input();
  let condition1 = a % 2 === 1 && a % 3 === 0;
  let condition2 = a % 2 === 0 && a % 5 === 0;

  console.log(condition1 || condition2 ? "true" : "false");
}

main();
