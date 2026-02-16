function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function area(n) {
  return n * n;
}

function main() {
  const n = input();
  const ret = area(n);
  console.log(ret);
  if (n < 5) {
    console.log("tiny");
  }
}

main();
