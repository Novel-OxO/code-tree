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
    let n = Number(raw.trim());
    
    for(let i = n; i >= 1; i--) {
        let temp = '';
        
        for(let j = n; j >= 1; j--) {
            temp += j + ' ';
        }

        console.log(temp);
    }
}

solve(readInput());
