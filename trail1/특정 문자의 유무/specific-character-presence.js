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
    let str = raw.trim();
    let result1 = str.includes('ee');
    let result2 = str.includes('ab');

    console.log((result1 ? 'Yes' : 'No') + ' ' + (result2 ? 'Yes' : 'No'));
}

solve(readInput());
