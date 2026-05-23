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
    let sum1 = arr.filter((num, index) => index % 2 === 0).reduce((acc, curr) => acc + curr, 0);
    let sum2 = arr.filter((num, index) => index % 2 === 1).reduce((acc, curr) => acc + curr, 0);
    console.log(Math.abs(sum1 - sum2));
}

solve(readInput());
