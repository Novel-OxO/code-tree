function input() {
  const fs = require("fs");
  let inputs = fs.readFileSync(0).toString().trim().split("\n");
  return inputs.map((v) => v.split(" ")).map((p) => [p[0], Number(p[1])]);
}

function people(p) {
  let [yn, temp] = p;
  return yn === "Y" && temp >= 37;
}

function main() {
  let peoples = input();
  let count = peoples.filter((p) => people(p)).length;
  console.log(count >= 2 ? "E" : "N");
}

main();
