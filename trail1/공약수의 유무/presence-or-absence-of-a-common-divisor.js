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
    let [a, b, c] = raw.trim().split(' ').map(Number);

    for(let i = a; i <= b; i++) {
        if(1920 % i === 0 && 2880 % i === 0) {
            console.log(1);
            return;
        }
    }

    console.log(0);
}



solve(readInput());
