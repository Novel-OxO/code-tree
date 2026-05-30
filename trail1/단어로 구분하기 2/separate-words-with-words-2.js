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
    const inputs = raw.trim().split(' ').filter((v , i) => i % 2 === 0).join('\n');
    console.log(inputs);
}

solve(readInput());
