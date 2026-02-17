function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  let a = input();

  if (a % 2 === 0) {
    a /= 2;
  }

  if (a % 2 === 1) {
    a += 1;
    a /= 2;
  }

  console.log(a);
}

main();
