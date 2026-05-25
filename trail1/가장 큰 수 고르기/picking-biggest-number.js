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
    const arr = raw.trim().split(' ').map(Number);
    let maxVal = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    console.log(maxVal);
}

solve(readInput());
