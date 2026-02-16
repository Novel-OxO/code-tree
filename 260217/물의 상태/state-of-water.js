function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  const t = input();
  if (t < 0) {
    console.log("ice");
  } else if(t >= 100) {
    console.log('vapor')
  } else {
    console.log('water')
  }
}

main();
