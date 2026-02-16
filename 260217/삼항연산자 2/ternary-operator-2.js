function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  const ret = input() === 1 ? 't': 'f';
  console.log(ret);
}

main();
