const scores = require("fs").readFileSync(0).toString().trim().split("\n");

let [math1, eng1] = scores[0].split(" ").map(Number);
let [math2, eng2] = scores[1].split(" ").map(Number);

if(math1 > math2 && eng1 > eng2) {
    console.log(1);
} else {
    console.log(0);
}