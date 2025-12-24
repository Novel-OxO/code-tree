const n = Number(require("fs").readFileSync(0).toString().trim());

if(n % 19 === 0 || n % 13 ===0) {
    console.log("True");
} else {
    console.log("False");
}