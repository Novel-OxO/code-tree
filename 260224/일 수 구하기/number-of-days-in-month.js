function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim();
  return Number(inputs);
}

function main() {
  let m = input();
  
  if(m === 2) {
    console.log(28);
  } else if(m === 4 || m === 6 || m === 9 || m === 11) {
    console.log(30);
  } else {
    console.log(31);
  }
}

main();
