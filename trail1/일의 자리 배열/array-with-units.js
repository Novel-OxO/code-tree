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
    let [n1, n2] = raw.trim().split(' ').map(Number);
    let arr = Array.from({length: 10}, (_, i) => 0);
    arr[0] = n1;
    arr[1] = n2;

    for(let i = 2; i < 10; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 10;
    }

    console.log(arr.join(' '));
}

solve(readInput());
