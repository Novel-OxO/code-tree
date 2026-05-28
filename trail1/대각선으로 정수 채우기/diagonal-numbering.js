const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}

// (0, 0)
// (0, 1) (1, 0)
// ...
// (0, m - 1) (1, m - 2) (2, m - 3) ... (m - 1, 0)
// (1, m - 1) (2, m - 2) ... (m - 1, 1)
// ...
// (n - 1, m - 1)
function solve(raw) {
    const[n, m] = raw.trim().split(' ').map(Number);
    const arr = Array(n).fill(0).map(() => Array(m).fill(0));
    let cnt = 1;

    for(let col = 0; col < m; col++) {
        let r = 0, c = col;
        while(r < n && c >= 0) {
            arr[r][c] = cnt++;
            r++;
            c--;
        }
    }

    for(let row = 1; row < n; row++) {
        let r = row, c = m - 1;
        while(r < n && c >= 0) {
            arr[r][c] = cnt++;
            r++;
            c--;
        }
    }

    console.log(arr.map(row => row.join(' ')).join('\n'));
}

solve(readInput());
