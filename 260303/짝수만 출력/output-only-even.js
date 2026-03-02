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
  let i = a;
  let result = "";

  while (i <= b) {
    if (i % 2 === 0) {
      result += i + " ";
    }

    i++;
  }

  console.log(result);
}

main();
