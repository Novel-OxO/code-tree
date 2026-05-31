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
    let [str, n] = raw.trim().split('\n');
    n = parseInt(n);

    let temp = '';
    for(let i = str.length - 1; i >= Math.max(0, str.length - n); i--) {
        temp += str[i];
    }

    console.log(temp);
}

solve(readInput());
