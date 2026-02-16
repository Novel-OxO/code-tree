function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  const a = input();
  const ret = a >= 113 ? 1 : 0;
  console.log(ret);
}

main();
