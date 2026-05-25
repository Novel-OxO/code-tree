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
    const lines = raw.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    const count = arr.filter(x => x === m).length;
    console.log(count);
}

solve(readInput());
