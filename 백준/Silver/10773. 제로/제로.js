const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n');

const Solved = (inputData) => {
  const [num , ...data] = inputData.map(Number);
  const arr = [];
  for(let i = 0; i< data.length; i++){
    if(data[i] !== 0) {
      arr.push(data[i]);
    } else {
      arr.pop();
    }
  }
  const answer = arr.reduce((acc ,cur) => acc+cur ,0);
  console.log(answer);
};
Solved(inputData);