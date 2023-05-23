const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const Solved = (inputData) => {
  const A = inputData[0];
  const B = inputData[1];
  const V = inputData[2];
  console.log((V - B) % (A - B) === 0 ? Math.floor((V - B) / (A - B)) : Math.floor((V - B) / (A - B)) + 1);
};
Solved(inputData);