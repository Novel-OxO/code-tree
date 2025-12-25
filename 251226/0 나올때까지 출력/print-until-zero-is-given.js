const fs = require("fs");
const inputs = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let idx = 0;

while(true) {
    const input = inputs[idx++];
    if(input === 0) break;
    console.log(input);
}
