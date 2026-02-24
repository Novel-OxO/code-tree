function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let n = input();
  let max = n * 5;
  let result = "";

  for (let i = n; i <= max; i += n) {
    result += i + " ";
  }
  
  console.log(result);
}

main();
