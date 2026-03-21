function input() {
    const fs = require("fs");
    const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
    return [a, b];
}

function main() {
    const [a, b] = input();
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    let result = '';
    
    for(let i = max; i >= min; i--){
        result += i + ' ';    
    }
    
    console.log(result);
}

main();
