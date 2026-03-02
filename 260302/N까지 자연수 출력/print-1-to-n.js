function input () {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let n = input();
  let i = 1;
  let result = "";
  while (i <= n) {
    result += i + " ";
    i++;
  }

  console.log(result);
}

main();
