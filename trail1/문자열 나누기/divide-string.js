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
    let lines = raw.trim().split('\n');
    const numbers = lines[1].split(' ');
    let str = numbers.join('');
    let temp = '';

    for(let i = 0; i < str.length; i++) {
        temp += str[i];
        if((i + 1) % 5 === 0) {
            temp += '\n';
        }
    }

    console.log(temp.trim());
}

solve(readInput());
