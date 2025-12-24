const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const WORD = "LeebrosCode";

for (let i = 0; i < n; i++) {
  console.log(WORD);
}
