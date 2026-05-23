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
    let [n, ...inputs] = raw.trim().split('\n');
    for(let input of inputs) {
        let [a, b] = input.split(' ').map(Number);
        
        let temp = 1;
        for(let i = a; i <= b; i++) {
            temp *= i;
        }
        console.log(temp);
    }

}

solve(readInput());
