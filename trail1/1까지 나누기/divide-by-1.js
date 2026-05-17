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
    let num = Number(raw.trim());
    let cur = 1;
    let count = 0;

    while(num > 1) {
        num = Math.floor(num / cur);
        count++;
        cur++;
    }

    console.log(count);
}

solve(readInput());
