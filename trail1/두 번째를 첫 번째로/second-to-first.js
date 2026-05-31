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
    let second = str[1];
    let first = str[0];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === second) {
            str[i] = first;
        }
    }
    console.log(str.join(''));
}

solve(readInput());
