function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  let a = input();
  console.log(a % 3 === 0 ? "YES" : "NO");
  console.log(a % 5 === 0 ? "YES" : "NO");
}

main();
