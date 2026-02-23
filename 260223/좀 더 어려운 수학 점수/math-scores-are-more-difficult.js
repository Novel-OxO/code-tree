function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim().split("\n");
  return inputs.map((v) => v.split(" ").map(Number));
}

function main() {
  let [A, B] = input();
  
  if(A[0] === B[0]) {
    if(A[1] > B[1]) {
      console.log("A")
    } else {
      console.log("B")
    }
  } else {
    if(A[0] > B[0]) {
      console.log("A")
    } else {
      console.log("B")
    }
  }
}

main();
