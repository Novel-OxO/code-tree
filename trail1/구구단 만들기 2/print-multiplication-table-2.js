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
        let [a, b] = raw.trim().split(' ').map(Number);


        for(let i = 2; i <= 8; i+= 2) {
            let temp = '';

            for(let j = b; j >= a; j--) {
                temp += `${j} * ${i} = ${j * i}`;
                if(j !== a) {
                    temp += ' / ';
                }
            }
            console.log(temp);
        }
    }

    solve(readInput());
