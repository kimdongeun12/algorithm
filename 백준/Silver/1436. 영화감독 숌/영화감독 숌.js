const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split(' ')[0];

const Solved = (inputData) => {
  let num = Number(inputData);
  let title = 665;
  let count = 0;
  while (count !== num) {
    title++
    if(String(title).includes('666')){
      count++
    };
  }
  console.log(String(title))
};
Solved(inputData);
