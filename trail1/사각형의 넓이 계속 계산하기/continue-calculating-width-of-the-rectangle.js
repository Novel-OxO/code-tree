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
    let inputs = raw.trim().split('\n');
    
    for(let input of inputs) {
        let [a, b, c] = input.split(' ');
        a = Number(a);
        b = Number(b);

        console.log( a * b);
        if(c === 'C') {
            break;
        }
    }
}

solve(readInput());
