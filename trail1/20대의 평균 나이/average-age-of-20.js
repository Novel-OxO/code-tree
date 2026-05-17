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
    let sum = 0;
    let cnt = 0;

    for(let number of numbers) {
        if(Math.floor(number / 10) !== 2) {
            break;
        }

        sum += number;
        cnt++;
    }

    let avg = sum / cnt;
    console.log(avg.toFixed(2));
}

solve(readInput());
