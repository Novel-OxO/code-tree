const [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function count(num) {
  let cnt = 1;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      cnt++;
    }
  }

  return cnt;
}

let answer = 0;

for (let i = a; i <= b; i++) {
  if (count(i) === 3) {
    answer++;
  }
}

console.log(answer);
