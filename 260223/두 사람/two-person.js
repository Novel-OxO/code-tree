function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim().split("\n");
  return inputs.map((v) => v.split(" ")).map((v) => [Number(v[0]), v[1]]);
}

function check(x) {
  return x[0] >= 19 && x[1] === "M";
}

function main() {
  let [A, B] = input();

  if (check(A) || check(B)) {
    console.log(1);
  } else {
    console.log(0);
  }
}

main();
