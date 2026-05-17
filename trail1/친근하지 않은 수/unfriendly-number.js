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
    const num = Number(raw.trim());
    let count = 0;

    for(let i = 1; i <= num; i++) {
        if(!check(i)) {
            count++;
        }
    }
    console.log(count);
}

function check(number) {
    return number % 2 === 0 || number % 3 === 0 || number % 5 === 0;
}

solve(readInput());