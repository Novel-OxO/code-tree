function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  const ret = input() === 100 ? 'pass': 'failure';
  console.log(ret);
}

main();
