const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n');
const Solved = (inputData) => {
  const [num , ...arr] = inputData;
  const setArr = Array.from(new Set(arr));
  const sortArr = setArr.sort((a , b) => {
    if(a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a < b && -1;
    }
  });
  console.log(setArr.join('\n'));
};
Solved(inputData);