function input() {
  const fs = require("fs");
  const input = fs.readFileSync(0).toString().trim();
  return Number(input);
}

function main() {
  const t = input();
  if (t >= 1) {
    console.log("High");
  } else if (t >= 0.5) {
    console.log("Middle");
  } else {
    console.log("Low");
  }
}

main();
