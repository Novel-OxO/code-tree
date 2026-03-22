function input() {
  const fs = require('fs');
  const [n, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
  return [n ,a];
}

function check(n) {
  if(n % 2 === 0 || n % 3 === 0) {
    return 1;
  }

  return 0;
}

function main() {
  const [n, a] = input();
  let i = 1;
  
  while (i <= n) {
    console.log(i % a === 0 ? 1 : 0);
    i++;
  }
}

main();