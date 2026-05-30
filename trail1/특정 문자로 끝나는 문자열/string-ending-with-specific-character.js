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
    const c = lines[lines.length -1];
    let input = lines.slice(0, lines.length - 1);
    input = input.filter(v => v.endsWith(c));
    console.log(input.length === 0 ? 'None' : input.join('\n'));
}

solve(readInput());
