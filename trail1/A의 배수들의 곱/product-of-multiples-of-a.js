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
    const [a, b] = raw.trim().split(' ').map(Number);
    let result = 1;

    for(let i = 1; i <= b; i++) {
        if(i % a === 0) {
            result *= i;
        }
    }

    console.log(result);
}

solve(readInput());