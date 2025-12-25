const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 1; i <= n; i++) {
  let result = "";

  for(let j = 1; j <= i; j++) {
     result += `${i} `
  }
  
  console.log(result);
}
