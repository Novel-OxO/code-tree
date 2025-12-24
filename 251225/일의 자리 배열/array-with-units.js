const fs = require("fs");
let [num1, num2] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let arr = [num1, num2];
let idx = 2;

while (arr.length < 10) {
    arr.push((arr[idx - 1] + arr[idx - 2]) % 10);
    idx++;
}

console.log(arr.join(" "));