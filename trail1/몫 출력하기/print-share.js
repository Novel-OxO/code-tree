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
    let numbers = raw.trim().split('\n').map(Number);
    let cnt = 0;

    for(let number of numbers) {
        if(cnt >= 3) {
            break;
        }

        if(number % 2 === 0) {
            console.log(number / 2);
            cnt++;
        }
    }
}

solve(readInput());
