function input() {
  const fs = require("fs");
  let a = fs.readFileSync(0).toString().trim();

  return Number(a);
}

function main() {
  let a = input();
  console.log(a >= 10 && a <= 20 ? "yes" : "no");
}

main();
