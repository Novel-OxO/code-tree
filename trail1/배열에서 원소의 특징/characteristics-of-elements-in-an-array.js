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
    let arr = raw.trim().split(' ').map(Number);
    let index = arr.findIndex(num => num % 3 === 0);
    console.log(arr[index - 1])
}

solve(readInput());
