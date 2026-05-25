const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}

// N1개의 원소로 이루어져 있는 수열 A
// N2개의 원소로 이루어져 있는 수열 B
// 수열 B가 수열 A의 연속 부분 수열인지?
// 연속 부분 수열이란 수열 A의 원소들을 연속하게 뽑았을 때 나올 수 있는 수
function solve(raw) {
    const lines = raw.trim().split('\n');
    const [N1, N2] = lines[0].split(' ').map(Number);
    const A = lines[1].split(' ').map(Number);
    const B = lines[2].split(' ').map(Number);

    for(let i = 0; i <= N1 - N2; i++) {
        let isSubsequence = true;
        for(let j = 0; j < N2; j++) {
            if(A[i + j] !== B[j]) {
                isSubsequence = false;
                break;
            }
        }
        if(isSubsequence) {
            console.log('Yes');
            return;
        }
    }
    console.log('No');
}

solve(readInput());
