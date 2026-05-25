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
    let n = Number(raw.trim());
    let arr = [1, n];

    while(arr[arr.length-1] < 100) {
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    }
    
    console.log(arr.join(' '));
}

solve(readInput());
