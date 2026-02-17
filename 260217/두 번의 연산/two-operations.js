function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  let a = input();

  if (a % 2 !== 0) {
    a += 3;
  }

  if (a % 3 === 0) {
    a /= 3;
  }

  console.log(a);
}

main();
