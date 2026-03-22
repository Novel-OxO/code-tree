function input() {
  const fs = require('fs');
  return Number(fs.readFileSync(0).toString().trim());
}

function check(n) {
  if(n % 2 === 0 || n % 3 === 0) {
    return 1;
  }

  return 0;
}

function main() {
  const n = input();
  let result = '';

  for(let i = 1; i <= n; i++) {
    result += check(i) + ' ';
  }

  console.log(result);
}

main();