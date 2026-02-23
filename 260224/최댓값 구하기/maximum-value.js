function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim().split(" ");
  return inputs.map(Number);
}

function main() {
  let arr = input();
  let max = Math.max(...arr);
  console.log(max);
}

main();
