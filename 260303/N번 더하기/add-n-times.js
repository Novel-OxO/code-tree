function input() {
  let [a, n] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  return [a, n];
}

function main() {
  let [a, n] = input();

  let result = a;
  for (let i = 0; i < n; i++) {
    result += n;
    console.log(result);
  }
}

main();
