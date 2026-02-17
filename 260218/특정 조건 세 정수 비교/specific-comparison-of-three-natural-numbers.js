function input() {
  const fs = require("fs");
  let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
  let first = arr[0];
  arr.sort((a, b) => a - b);

  return [first, arr];
}

function main() {
  let [first, arr] = input();

  let result1 = first === arr[0] ? 1 : 0;
  let result2 = arr[0] === arr[2] ? 1 : 0;

  console.log(`${result1} ${result2}`);
}

main();
