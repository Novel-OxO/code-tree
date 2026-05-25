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
    let min = arr[0];
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(Math.abs(arr[i]) === 999) {
            break;
        }
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(`${max} ${min}`);
}

solve(readInput());
