function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim().split("\n");
  return inputs.map(Number);
}

function main() {
  let [gender, age] = input();
  if (gender === 0) {
    if (age >= 19) {
      console.log("MAN");
    } else {
      console.log("BOY");
    }
  } else {
    if (age >= 19) {
      console.log("WOMAN");
    } else {
      console.log("GIRL");
    }
  }
}

main();
