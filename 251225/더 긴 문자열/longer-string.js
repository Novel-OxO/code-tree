const fs = require("fs");
const words = fs.readFileSync(0).toString().trim().split(" ");

if (words[0].length > words[1].length) {
  console.log(words[0], words[0].length);
} else if (words[0].length < words[1].length) {
  console.log(words[1], words[1].length);
} else {
  console.log("same");
}
