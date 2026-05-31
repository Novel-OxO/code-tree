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
    let [str1, str2] = raw.trim().split('\n');
    let ab = str1 + str2;
    let ba = str2 + str1;

    console.log(ab === ba ? 'true' : 'false');
}

solve(readInput());
