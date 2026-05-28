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
    const n = parseInt(raw.trim());
    const arr = Array(n).fill(0).map(() => Array(n).fill(0));
    let cnt = 1;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            arr[j][i] = cnt++;
        }
    }

    const result = arr.map(row => row.join(' ')).join('\n');
    console.log(result);
}

solve(readInput());
