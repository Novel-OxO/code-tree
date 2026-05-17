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
    let sum = 1;

    for(let i = 1; i <= 10; i++) {
        sum *= i;

        if(sum >= num) {
            console.log(i);
            break;
        }
    }
}

solve(readInput());