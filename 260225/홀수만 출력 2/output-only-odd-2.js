function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim().split(' ');
  return inputs.map(Number);
}

function main() {
  let [a, b] = input();
  let result = "";

  for (let i = b; i >= a; i-=2) {
    result += i + " ";
  }

  console.log(result);
}

main();
