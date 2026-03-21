function input() {
    const fs = require("fs");
    const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
    return [a, b];
}

function main() {
    const [a, b] = input();

    if(a > 0) {
        let result = '';
        for(let i = 0; i < b; i++) {
            result += a
        }
        console.log(result);
    } else {
        console.log(0);
    }
}

main();
