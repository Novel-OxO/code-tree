function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let n = input();

  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }

  console.log(result);
}

main();
