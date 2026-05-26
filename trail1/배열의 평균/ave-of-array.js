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
    const arr2D = raw.trim().split('\n').map(line => line.split(' ').map(Number));
    let temp = '';
    // 가로 평균
    for(let i = 0; i < arr2D.length; i++) {
        let sum = 0;
        for(let j = 0; j < arr2D[i].length; j++) {
            sum += arr2D[i][j];
        }
        temp += (sum / arr2D[i].length).toFixed(1) + ' ';
    }
    temp = temp.trim() + '\n';
    // 세로 평균
    for(let i = 0; i < arr2D[0].length; i++) {
        let sum = 0;
        for(let j = 0; j < arr2D.length; j++) {
            sum += arr2D[j][i];
        }
        temp += (sum / arr2D.length).toFixed(1) + ' ';
    }
    console.log(temp.trim());

    // 전체 평균
    let sum = 0;
    for(let i = 0; i < arr2D.length; i++) {
        for(let j = 0; j < arr2D[i].length; j++) {
            sum += arr2D[i][j];
        }
    }
    console.log((sum / (arr2D.length * arr2D[0].length)).toFixed(1));
}

solve(readInput());
