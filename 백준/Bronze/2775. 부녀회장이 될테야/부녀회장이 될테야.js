const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

const Solved = (inputData) => {
  const arr = [];
  for(let i = 1; i <= inputData.length / 2; i++) {
    arr.push(inputData.slice((i * 2) - 1, (i * 2) + 1));
  }
  arr.forEach((el , idx) => {
    let num = 1;
    for(let i = 0; i < el[1] - 1; i++){
      num = num * (el[0] + el[1] - i);
    };
    for(let i = 1; i < el[1]; i++){
      num = num / i;
    }
    console.log(Math.abs(num));
  });
};
Solved(inputData);