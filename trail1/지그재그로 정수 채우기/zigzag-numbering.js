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
    const[n, m] = raw.trim().split(' ').map(Number);
    const arr = Array(n).fill(0).map(() => Array(m).fill(0));
    let cnt = 0;

    for(let col = 0; col < m; col++) {
        if(col % 2 === 0) {
            for(let row = 0; row < n; row++) {
                arr[row][col] = cnt++;
            }
        } else {
            for(let row = n - 1; row >= 0; row--) {
                arr[row][col] = cnt++;
            }
        }
    }

    const result = arr.map(row => row.join(' ')).join('\n');
    console.log(result);
}

solve(readInput());
