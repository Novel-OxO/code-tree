function input() {
    const fs = require("fs");
    const [c, n] = fs.readFileSync(0).toString().trim().split(' ');
    return [c, n];
}

function main() {
    const [c, n] = input();
    let result = ''
    
    if(c === 'A') {
        for(let i = 1; i <= n; i++) {
            result += i + ' ';
        }
    } else {
        for(let i = n; i >= 1; i--) {
            result += i + ' ';
        }
    }
    
    console.log(result);
}

main();
