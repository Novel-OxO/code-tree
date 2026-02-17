function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim().split(" ");
  return input.map(Number);
}

function main() {
  let [a, b] = input();

  let result1 = a < b ? 1 : 0;
  let result2 = a === b ? 1 : 0;

  console.log(`${result1} ${result2}`);
}

main();
