const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ");
let reversedArray = arr.reverse();
console.log(reversedArray.join(""));
