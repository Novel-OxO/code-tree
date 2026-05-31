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
    str = str.split('');
    str[1] = '';
    str[str.length - 2] = '';
    console.log(str.join(''));
}

solve(readInput());
