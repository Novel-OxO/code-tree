function input() {
  const fs = require("fs");
  let arr = fs.readFileSync(0).toString().trim().split(" ");
  return arr.map(Number);
}

function main() {
  let arr = input();

  if (arr[0] >= 90) {
    if (arr[1] >= 95) {
      console.log(100000);
    } else if (arr[1] >= 90) {
      console.log(50000);
    }
  } else {
    console.log(0);
  }
}

main();
