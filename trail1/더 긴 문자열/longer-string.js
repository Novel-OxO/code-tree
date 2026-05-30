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
    let [a, b] = raw.trim().split(' ');
    
    if(a.length === b.length) {
        console.log('same');
        return;
    }

    if(a.length > b.length) {
        console.log(a + ' ' + a.length);
        return;
    }

    console.log(b + ' ' + b.length);
}

solve(readInput());
