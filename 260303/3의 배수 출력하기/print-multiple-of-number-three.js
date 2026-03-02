function input() {
  let input = require("fs").readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  let n = input();
  let i = 1;
  let result = "";

  while (i <= n) {
    if (i % 3 === 0) {
      result += i + " ";
    }

    i++;
  }

  console.log(result);
}

main();
