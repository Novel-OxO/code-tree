function input() {
  const fs = require("fs");
  let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
  return arr;
}

function main() {
  let arr = input();
  arr = arr.sort((a, b) => a - b);

  console.log(arr[0]);
}

main();
