const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());
const arr = Array.from({ length: N }, () => Array(N).fill(0));

// 열 단위로 순회
for(let col = 0; col < N; col++) {
  if(col % 2 === 0) {
    let rowStart = 0;
    let rowEnd = N - 1;

    let cnt = 1;
    while(rowStart <= rowEnd) {
      arr[rowStart][col] = cnt;
      cnt++;
      rowStart++;
    }

  } else {
    let rowStart = N - 1;
    let rowEnd = 0;

    let cnt = 1;
    while(rowStart >= rowEnd) {
      arr[rowStart][col] = cnt;
      cnt++;
      rowStart--;
    }
  }
}

let result = '';

for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    result += arr[i][j];
  }
  result += '\n';
}

console.log(result);