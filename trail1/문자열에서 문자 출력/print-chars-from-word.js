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
    const str = raw.trim();
    for(let i = 0; i < str.length; i++) {
        const c = str[i];
        console.log(c);
    }
}

solve(readInput());
