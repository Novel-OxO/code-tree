const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

function check(row, col) {
  let coin = 0;

  for(let r = row; r < row + 3; r++) {
    for(let c = col; c < col + 3; c++) {
        if(grid[r][c] == 1) {
            coin++;
        }
    }
  }

  return coin;
}

let maxCoin = 0;
// Please Write your code here.
for(let i = 0; i <= n - 3; i++) {
    for(let j = 0; j <= n - 3; j++) {
        let coin = check(i, j);
        maxCoin = Math.max(maxCoin, coin);
    }
}

console.log(maxCoin);