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
    const arr = ["apple", "banana", "grape", "blueberry", "orange"];
    const input = raw.trim();
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if(str[2] === input || str[3] === input) {
            count++;
            console.log(str);
        }
    }
    console.log(count);
}

solve(readInput());
