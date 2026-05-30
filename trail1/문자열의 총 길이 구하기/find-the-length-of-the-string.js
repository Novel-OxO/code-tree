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
    const input = raw.trim().split(' ');
    const res = input.map(x => x.length).reduce((a, b) => a + b, 0);
    console.log(res);
}

solve(readInput());
