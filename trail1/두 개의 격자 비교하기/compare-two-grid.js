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
    const lines = raw.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const rest = lines.slice(1);
    const arr1 = Array(n).fill(0).map(() => Array(m).fill(0));
    const arr2 = Array(n).fill(0).map(() => Array(m).fill(0));
    const answer = Array(n).fill(0).map(() => Array(m).fill(0));

    for(let i = 0; i < n; i++) {
        arr1[i] = rest[i].split(' ').map(Number);
    }

    for(let i = 0; i < n; i++) {
        arr2[i] = rest[i + n].split(' ').map(Number);
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            answer[i][j] = arr1[i][j] === arr2[i][j] ? 0 : 1;
        }
    }

    console.log(answer.map(row => row.join(' ')).join('\n'));
}

solve(readInput());
