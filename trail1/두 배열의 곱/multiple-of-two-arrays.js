const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}
// N개의 정수가 주어졌을 때, 중복하여 등장하지 않는 정수 중 최댓값을 구하는 프로그램을 작성해보세요.
function solve(raw) {
    const input = raw.trim().split('\n').filter(x => x.trim() !== '');
    const arr1 = [input[0], input[1], input[2]].map(x => x.trim().split(' ').map(Number));
    const arr2 = [input[3], input[4], input[5]].map(x => x.trim().split(' ').map(Number));
    
    const answer = Array(3).fill(0).map(() => Array(3).fill(0));

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            answer[i][j] = arr1[i][j] * arr2[i][j];
        }
    }
    
    for(let i = 0; i < 3; i++) {
        console.log(answer[i].join(' '));
    }
}

solve(readInput());
