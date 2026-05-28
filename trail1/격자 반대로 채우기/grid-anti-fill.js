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
    let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let arrowTop = true;
    let cnt = 1;

    for(let col = n-1; col >= 0; col--) {

        if(arrowTop) {
            for(let row = n - 1; row >= 0; row--) {
                arr[row][col] = cnt++;
            }
            arrowTop = false;
        } else {
            for(let row = 0; row < n; row++) {
                arr[row][col] = cnt++;
            }
            arrowTop = true;
        }
    }

    console.log(arr.map(row => row.join(' ')).join('\n'));
}

solve(readInput());
