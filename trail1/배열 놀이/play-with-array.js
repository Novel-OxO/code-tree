const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}

// N개의 원소와 Q개의 질의
// 하나의 질의는 다음 세 종류 중 하나
// 1 a: a번째 원소를 출력
// 2 b: N개의 원소중 값이 b인 원소를 찾아 그 원소가 몇 번째 원소인지 출력
// 원소가 여러개라면 가장 작은 인덱스 출력
// 없다면 0출력
// 3 s e: s번째 원소부터 e번째 원소까지 각 원소의 값을 공백으로 구분하여 출력

function solve(raw) {
    const lines = raw.trim().split('\n');
    const [N, Q] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    const queries = lines.slice(2).map(line => line.split(' '));

    for(let i = 0; i < Q; i++) {
        const [type, arg1, arg2] = queries[i];
        if(type === '1') {
            console.log(arr[Number(arg1) - 1]);
        } else if(type === '2') {
            const index = arr.indexOf(Number(arg1));
            console.log(index !== -1 ? index + 1 : 0);
        } else if(type === '3') {
            const s = Number(arg1) - 1;
            const e = Number(arg2) - 1;
            console.log(arr.slice(s, e + 1).join(' '));
        }
    }
}

solve(readInput());
