function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function diff(n) {
  if (n >= 80) {
    return 0;
  }

  return 80 - n;
}

function main() {
  const n = input();
  const d = diff(n);
  const ret = d === 0 ? "pass" : `${d} more score`;
  console.log(ret);
}

main();