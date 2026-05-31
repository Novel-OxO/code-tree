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
    let input = raw.trim();
    let temp = '';
    for(let i = 0; i < input.length; i++) {
        if(i % 2 === 1) {
            temp += input[i];
        }
    }
    console.log(temp.split('').reverse().join(''));
}

solve(readInput());
