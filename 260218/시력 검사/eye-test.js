function input() {
  const fs = require("fs");
  let [a, b] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

  return [a, b];
}

function main() {
  let [a, b] = input();

  if (a >= 1 && b >= 1) {
    console.log("High");
  } else if (a >= 0.5 && b >= 0.5) {
    console.log("Middle");
  } else {
    console.log("Low");
  }
}

main();
