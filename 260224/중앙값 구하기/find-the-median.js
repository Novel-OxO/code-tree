function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim().split(" ");
  return inputs;
}

function main() {
  let arr = input();
  arr = arr.sort((a, b) => a - b);
  console.log(arr[1]);
}

main();
