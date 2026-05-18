const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}

function solve(raw) {
    let n = Number(raw.trim());

    for(let i = 1; i <= n; i++) {
        let temp = '';
        for(let j = 1; j <= n - i + 1; j++) {
            temp += '* ';
        }
        console.log(temp);
    }
}

solve(readInput());
