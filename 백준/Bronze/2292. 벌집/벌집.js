const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const num = inputData[0];

function Solved(inputData) {
  let load = 1;
  let count = 1;
  while(num > load){
    load += 6 * count;
    count++;
  }
  console.log(count)
};


Solved(inputData);