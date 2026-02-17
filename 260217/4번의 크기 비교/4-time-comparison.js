function input() {
  const fs = require("fs");
  let [a, arr] = fs.readFileSync(0).toString().trim().split("\n");

  a = Number(a);
  arr = arr.map(Number);

  return [a, ...arr];
}

function greater(a, b) {
  return a > b ? 1 : 0;
}

function main() {
  let inputs = input();
  for (let i = 1; i < inputs.length; i++) {
    console.log(greater(inputs[0], inputs[i]));
  }
}

main();
