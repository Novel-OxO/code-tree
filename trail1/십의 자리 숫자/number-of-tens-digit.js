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
    let index = arr.indexOf(0);
    arr = arr.slice(0, index);
    let counts = Array(10).fill(0);
    arr.forEach(num => counts[Math.floor(num / 10)]++);
    
    for(let i = 1; i < 10; i++) {
        console.log(`${i} - ${counts[i]}`);
    }
}

solve(readInput());
