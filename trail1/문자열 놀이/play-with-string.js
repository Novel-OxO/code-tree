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
    let lines = raw.trim().split('\n');
    let [str, n] = lines[0].split(' ');
    n = parseInt(n);
    let query = lines.slice(1);

    for(let i = 0; i < n; i++) {
        let [command, a , b] = query[i].split(' ');
        
        if(command === '1') {
            let arr = str.split('');
            a = parseInt(a)-1;
            b = parseInt(b)-1;
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
            str = arr.join('');
            console.log(str);
        } else {
            let arr = str.split('');
            for(let j = 0; j < arr.length; j++) {
                if(arr[j] === a) {
                    arr[j] = b;
                }
            }
            str = arr.join('');
            console.log(str);
        }
    }
}

solve(readInput());
