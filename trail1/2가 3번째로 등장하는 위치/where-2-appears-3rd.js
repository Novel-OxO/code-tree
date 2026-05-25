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
    const arr = lines[1].split(' ').map(Number);
    let cnt = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 2) {
            cnt++;
        }

        if(cnt === 3) {
            console.log(i + 1);
            break;
        }
    }
}

solve(readInput());
