const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// a가 중앙 값인 경우
if(a > b && a < c || a < b && a > c) {
    console.log(a);
}
// b가 중앙 값인 경우
else if(b > a && b < c || b < a && b > c) {
    console.log(b);
}
// c가 중앙 값인 경우
else {
    console.log(c);
}