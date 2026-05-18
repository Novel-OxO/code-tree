const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}
// 1 -> 3
// 2 -> 1
// 별의 개수는 = -2 * i + 3
// 공백의 개수는 = i - 1
function solve(raw) {
    let n = Number(raw.trim());

    for(let i = 1; i <= n; i++) {
        let stars = 2 * n - 1 - 2 * (i-1);
        let spaces = i - 1;
        let temp = '';
        
        for(let j = 1; j <= spaces; j++) {
            temp += '  ';
        }
        for(let j = 1; j <= stars; j++) {
            temp += '* ';
        }
        console.log(temp);
    }
}

solve(readInput());
