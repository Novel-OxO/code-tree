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
    let [str1, str2] = raw.trim().split(' ');
    str1 = str1.split('');
    str2 = str2.split('');
    
    str2[0] = str1[0];
    str2[1] = str1[1];
    console.log(str2.join(''));
}

solve(readInput());
