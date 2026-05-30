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
    let arr = Array(n).fill(0).map(() => Array(n).fill(0));
    // 첫 행 과 열을 1로 채운다.
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 || j === 0) {
                arr[i][j] = 1;
            }
        }
    }
    // 나머지 칸은 왼쪽과 위의 합으로 채운다.
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < n; j++) {
            arr[i][j] = arr[i-1][j] + arr[i][j-1] + arr[i-1][j-1];
        }
    }

    console.log(arr.map(row => row.join(' ')).join('\n'));
}

solve(readInput());
