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
    let arr = raw.split(' ').map(Number);
    let index = arr.indexOf(0);
    arr = arr.slice(0, index);
    arr = arr.map(x => x % 2 === 0 ? x / 2 : x + 3);
    console.log(arr.join(' '));
}

solve(readInput());
