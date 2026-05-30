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
    let[a ,b] = raw.trim().split('\n');
    let count = a.split('').filter(x => b.includes(x)).length;
    console.log(count);
}

solve(readInput());
