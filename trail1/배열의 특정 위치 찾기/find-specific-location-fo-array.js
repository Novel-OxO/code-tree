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
    let arr = raw.trim().split(' ').map(Number);
    // 짝수 번째로 입력된 값의 합
    let sum1 = 0;
    // 3의 배수 번째로 입력된 값의 합
    let sum2 = 0;
    let cnt = 0;

    for(let i = 0; i < arr.length; i++) {
        if((i + 1) % 2 === 0) {
            sum1 += arr[i];
        }
        if((i + 1) % 3 === 0) {
            sum2 += arr[i];
            cnt++;
        }
    }
    
    console.log(`${sum1} ${((sum2 / cnt).toFixed(1))}`);
}

solve(readInput());
