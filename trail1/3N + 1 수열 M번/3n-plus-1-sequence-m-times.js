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
        let x = Number(input);
        
        let cnt = 0;
        while(x !== 1) {
            if(x % 2 === 0) {
                x /= 2;
            } else {
                x = 3 * x + 1;
            }
            cnt++;
        }
        console.log(cnt);
    }

}

solve(readInput());
