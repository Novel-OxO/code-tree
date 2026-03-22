function input() {
  const fs = require('fs');
  return (fs.readFileSync(0).toString());
}

function calcGrade(score) {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

function main() {
  const n = input();
  let result = '';
  
  for (let i = n; i <= 100; i++) {
    result += calcGrade(i) + ' ';  
  }
  
  console.log(result);
}

main();