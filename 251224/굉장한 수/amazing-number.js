const n = Number(require("fs").readFileSync(0).toString().trim());

const condition1 = n % 2 === 1 && n % 3 === 0;
const condition2 = n % 2 === 0 && n % 5 === 0;

if (condition1 || condition2) {
  console.log("true");
} else {
  console.log("false");
}
