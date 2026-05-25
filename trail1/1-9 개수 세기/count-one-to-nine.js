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
    let [_, arr] = raw.split('\n');
    arr = arr.split(' ').map(Number);
    let count = Array(10).fill(0);

    for(let num of arr) {
        count[num]++;
    }

    for(let i = 1; i <= 9; i++) {
        console.log(count[i]);
    }
}

solve(readInput());
