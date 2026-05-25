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
    let[n1, n2] = raw.trim().split(' ').map(Number);
    let arr = [n1, n2];

    while(arr.length < 10) {
        arr.push(2*arr[arr.length-2] + arr[arr.length-1]);
    }

    console.log(arr.join(' '));
}

solve(readInput());
