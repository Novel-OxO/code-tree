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
    let [_, input] = raw.trim().split('\n');
    let arr = input.split(' ').map(Number);
    arr = arr.reverse().filter(num => num % 2 === 0);
    console.log(arr.join(' '));
}

solve(readInput());
