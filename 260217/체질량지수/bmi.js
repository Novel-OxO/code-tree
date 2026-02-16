function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim().split(" ");
  return input.map(Number);
}

function calcBmi(h, w) {
  return (10000 * w) / (h * h);
}

function main() {
  const [h, w] = input();
  const ret = calcBmi(h, w);
  console.log(Math.floor(ret));
  
  if (ret >= 25) {
    console.log("Obesity");
  }
}

main();
