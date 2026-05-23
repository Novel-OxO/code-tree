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
    arr = arr.slice(0, arr.findIndex(num => num === 0) >= 0 ? arr.findIndex(num => num === 0) : arr.length);
    arr = arr.filter(num => num % 2 === 0);
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    
    console.log(`${arr.length} ${sum}`);
}

solve(readInput());
