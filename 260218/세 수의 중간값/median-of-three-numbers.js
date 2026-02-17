function input() {
  const fs = require("fs");
  let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
  return arr;
}

function main() {
  let arr = input();
  let result = arr[1] > arr[0] && arr[1] < arr[2] ? 1 : 0;
  console.log(result);
}

main();
