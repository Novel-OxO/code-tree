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
    let strs = raw.trim().split('\n');
    let min = Math.min(...strs.map(s => s.length));
    let max = Math.max(...strs.map(s => s.length));
    console.log(max - min);
}

solve(readInput());
