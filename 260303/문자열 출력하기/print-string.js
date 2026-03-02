function input() {
  let ret = require("fs").readFileSync(0).toString().trim();
  return Number(ret);
}

function main() {
  let n = input();

  for (let i = 1; i <= n; i++) {
    console.log("LeebrosCode");
  }
}

main();
