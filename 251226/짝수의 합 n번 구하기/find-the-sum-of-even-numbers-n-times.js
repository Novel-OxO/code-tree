const [n, ...inputs] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

function sum(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}

for (let i = 0; i < n; i++) {
  const [a, b] = inputs[i].split(" ").map(Number);
  console.log(sum(a, b));
}
