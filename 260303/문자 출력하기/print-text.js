function input() {
  let ret = require("fs").readFileSync(0).toString().trim();
  return ret;
}

function main() {
  console.log(input().repeat(8));
}

main();
