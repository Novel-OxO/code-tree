function input() {
  let [b, a] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  return [b, a];
}

function main() {
  let [b, a] = input();
  let i = b;
  let result = "";

  while (i >= a) {
    if (i % 2 === 0) {
      result += i + " ";
    }
    i--;
  }

  console.log(result);
}

main();
