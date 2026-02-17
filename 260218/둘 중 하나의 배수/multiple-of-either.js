function input() {
  const fs = require("fs");
  let a = fs.readFileSync(0).toString().trim();
  return Number(a);
}

function main() {
  let a = input();

  console.log(a % 3 === 0 || a % 5 === 0 ? 1 : 0);
}

main();
