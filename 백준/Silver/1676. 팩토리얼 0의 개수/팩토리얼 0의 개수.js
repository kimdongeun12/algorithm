const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n').map(Number);

const Solved = (inputData) => {
  const [num] = inputData;
  const a = Math.floor(num / 5);
  const b = Math.floor((num / 25));
  const c = Math.floor((num / 125));
  console.log(a + b + c)
};
Solved(inputData);
