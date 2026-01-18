let [a, b, c] = [1, 2, 3];
let sum = a + b + c;

[a, b, c] = [sum, sum, sum];
console.log(`${a} ${b} ${c}`);