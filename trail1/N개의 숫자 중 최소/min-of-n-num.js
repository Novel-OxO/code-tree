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
    const arr = raw.trim().split('\n')[1].split(' ').map(x => parseInt(x));
    let minVal = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    
    let count = arr.filter(x => x === minVal).length;
    console.log(`${minVal} ${count}`);
}

solve(readInput());
