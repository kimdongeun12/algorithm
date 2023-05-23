const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const Solved = (inputData) => {
  const N = inputData[0];
  const K = inputData[1];
  let answer = 1;
  
  for(let i = (N - K + 1); i <= N; i++){
    answer *= i;
  }
  for(let i= 1; i <= K; i++){
    answer = answer / i;
  }
  console.log(answer);
};
Solved(inputData);