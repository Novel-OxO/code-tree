function input() {
  let [a, b] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  return [a, b];
}

function main() {
  let [a, b] = input();

  let result = Math.floor(a / b) + ".";
  a = a % b;
  a *= 10;

  for (let i = 0; i < 20; i++) {
    result += Math.floor(a / b);
    a = a % b;
    a *= 10;
  }

  console.log(result);
}

main();
