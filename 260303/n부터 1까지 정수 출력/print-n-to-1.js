function input() {
  let input = require("fs").readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  let n = input();
  let i = n;
  let result = "";

  while (i >= 1) {
    result += i + " ";
    i--;
  }

  console.log(result);
}

main();
