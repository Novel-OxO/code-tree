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
    let [_, ...inputs] = raw.trim().split('\n');
    let cnt = 0;
    for(let input of inputs) {
        let arr = input.split(' ').map(Number);
        let avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
        if(avg >= 60) {
            cnt++;
        }
        console.log(avg >= 60 ? 'pass' : 'fail');
    }
    console.log(cnt);
}

solve(readInput());
