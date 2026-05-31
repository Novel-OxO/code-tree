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
    let [str, target] = raw.trim().split(' ');
    let idx = str.indexOf(target);
    console.log(idx === -1 ? 'No' : idx);
}

solve(readInput());
