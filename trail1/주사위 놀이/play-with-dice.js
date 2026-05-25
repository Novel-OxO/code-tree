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
    let arr = raw.trim().split(' ').map(Number).map(x => x - 1);
    let dices = Array(6).fill(0);
    arr.forEach(x => dices[x]++);

    for(let i = 0; i < dices.length; i++) {
        console.log(`${i + 1} - ${dices[i]}`);
    }
}

solve(readInput());
