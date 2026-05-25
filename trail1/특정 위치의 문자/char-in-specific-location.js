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
    const input = raw.trim();
    let arr = ['L', 'E', 'B', 'R', 'O', 'S'];
    let idx = arr.indexOf(input);
    console.log(idx === -1 ? 'None' : idx);
}

solve(readInput());
