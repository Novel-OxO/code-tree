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
    let n = parseInt(raw.trim());
    let arr2D = Array(n).fill(0).map(() => Array(n).fill(0));
    arr2D[0][0] = 1;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j <= i; j++) {
            if( i === 0 || j === i) {
                arr2D[i][j] = 1;
            }
            else if(j - 1 >= 0 && i - 1 >= 0) {
                arr2D[i][j] = arr2D[i-1][j] + arr2D[i-1][j-1];
            } else {
                arr2D[i][j] = 1;
            }
        }
    }

    let temp = '';
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j <= i; j++) {
            temp += arr2D[i][j] + ' ';
        }
        if(i !== n - 1) {
            temp += '\n';
        }
    }

    console.log(temp);
}

solve(readInput());
