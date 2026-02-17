function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim().split(" ");
  return input.map(Number);
}

function main() {
  const [a, b] = input();

  console.log(a >= b ? 1 : 0);
  console.log(a > b ? 1 : 0);
  console.log(b >= a ? 1 : 0);
  console.log(b > a ? 1 : 0);
}

main();
