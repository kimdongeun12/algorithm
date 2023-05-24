const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split(' ').map(Number);

const Solved = (inputData) => {
  let N = inputData[0];
  let K = inputData[1]- 1;
  const arr = Array(N).fill(0).map((el , idx) => idx + 1);
  let count = 0;
  const answer = [];
  let start = false;
  while(arr.length !== 0){
    count+=K;
    if(count >= arr.length) {
      count = count % arr.length;
    }
    answer.push(...arr.splice(count , 1));
  }
  console.log(`<${answer.join(', ')}>`)
};
Solved(inputData);
