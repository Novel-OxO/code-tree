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
    let lines = raw.trim().split('\n');
    let [n ,m] = lines[0].split(' ').map(Number);
    let coins = lines.slice(1).map(line => line.split(' ').map(Number));
    let arr = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let cnt = 1;
    for(let [x ,y] of coins) {
        arr[x][y] = cnt++;
    }

    let temp = '';
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            temp += arr[i][j] + ' ';
        }
        temp += '\n';
    }

    console.log(temp);
}

solve(readInput());
