const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}

// 두 정수 A,B
// A를 B로 나눈 몫을 A에 계속 저장
// A가 1이하가 되기 전 까지 나눗셈 반복
// 각 연산 마다 나온 나머지들이 등장한 회수를 제곱하여 그 합을 출력한다.
// 10 <= A <= 1000, 2 <= B <= 10
function solve(raw) {
    let [A, B] = raw.trim().split(' ').map(Number);
    const count = Array(10).fill(0);

    while(A > 1) {
        const remainder = A % B;
        count[remainder]++;
        A = Math.floor(A / B);
    }

    const result = count.reduce((acc, cur) => acc + cur * cur, 0);
    console.log(result);
}

solve(readInput());
