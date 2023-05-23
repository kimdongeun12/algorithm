const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number).sort((a , b) => a - b && 1);


const Solved = (inputData) => {
  let a = inputData[0];
  let b = inputData[1];
  let c = a % b;
  let count = 0;
  const answer = [];
  while(a % b !== 0) {
    count++
    a = b;
    b = c;
    c = a % b;
  }
  answer[0] = b;
  answer[1] = (inputData[0] * inputData[1]) / b;
  answer.forEach((el) => {
    console.log(el);
  })
};

Solved(inputData);