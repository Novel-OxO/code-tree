function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let n = input();
  let result = "";

  for (let i = n; i >= 1; i--) {
    result += i + " ";
  }

  console.log(result);
}

main();
