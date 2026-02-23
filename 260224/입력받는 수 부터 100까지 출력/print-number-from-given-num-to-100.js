function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let result = ''
  let n = input();

  for (let i = n; i <= 100; i++) {
    result += i + " ";
  }

  console.log(result);
}

main();
