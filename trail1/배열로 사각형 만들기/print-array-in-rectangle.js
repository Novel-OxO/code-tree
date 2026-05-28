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
    let arr2D = Array(5).fill(0).map(() => Array(5).fill(0));
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            if(i === 0 || j === 0) {
                arr2D[i][j] = 1;
            }
        }
    }

    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 5; j++) {
            arr2D[i][j] = arr2D[i-1][j] + arr2D[i][j-1];
        }
    }

    console.log(arr2D.map(row => row.join(' ')).join('\n'));
}

solve(readInput());
