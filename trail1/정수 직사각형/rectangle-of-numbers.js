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
    const [n, m] = raw.trim().split(' ').map(Number);
    const arr2D = Array(n).fill(0).map(() => Array(m).fill(0));
    let cnt = 1;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            arr2D[i][j] = cnt++;
        }
    }

    for(let i = 0; i < n; i++) {
        console.log(arr2D[i].join(' '));
    }
}

solve(readInput());
