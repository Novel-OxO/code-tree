function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim().split(" ");
  return input.map(Number);
}

function isEven(a) {
  return a % 2 === 0 ? "even" : "odd";
}

function main() {
  let [a, b] = input();

  console.log(isEven(a));
  console.log(isEven(b));
}

main();
