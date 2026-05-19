const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}
//  i  j
// (2, 2)
// (2, 3)
// (3, 3)
// (2, 4)
// (3, 4)
// (4, 4)

// n = 3일때 (2,2)
// n= 4 일때 (2,2), (2, 3), (3, 3)
// n = 5 일때 (2,2), (2, 3), (3, 3), (2, 4), (3, 4), (4, 4)

function solve(raw) {
    let n = Number(raw.trim());
    
    for(let i = 1; i <= n; i++) {
        let temp = '';
        
        for(let j = 1; j <= n; j++) {
            if(i === 1 || j === 1 || i === n || j === n) {
                temp += '* ';
                continue;
            }

            if(i > j) {
                temp += '* ';
                continue;
            }

            temp += '  ';
        }
        console.log(temp);
    }
}

solve(readInput());
