function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim().split(" ");
  return input.map(Number);
}

function main() {
  const [a, b] = input();
  console.log(Math.max(a, b));
}

main();
