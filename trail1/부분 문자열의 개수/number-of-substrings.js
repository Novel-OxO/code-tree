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
    let [str, target] = raw.trim().split('\n');
    let count = 0;

    for(let i = 0; i < str.length - target.length + 1; i++) {
        if(str.slice(i, i + target.length) === target) {
            count++;
        }
    }
    console.log(count);
}

solve(readInput());
