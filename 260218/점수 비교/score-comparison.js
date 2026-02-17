function input() {
  const fs = require("fs");
  let [a, b] = fs.readFileSync(0).toString().trim().split("\n");
  a = a.split(" ").map(Number);
  b = b.split(" ").map(Number);

  return [a, b];
}

function main() {
  let [a, b] = input();

  if (a[0] > b[0] && a[1] > b[1]) {
    console.log(1);
  } else {
    console.log(0);
  }
}

main();
