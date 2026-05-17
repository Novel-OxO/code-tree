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

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            console.log('C');
            return;
        }
    }

    console.log('P');
}



solve(readInput());
