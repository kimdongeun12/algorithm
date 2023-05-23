const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


const Solved = (inputData) => {
  for(let i = 0; i < inputData.length - 1; i++) {
    const numArr = inputData[i].split('');
    let check = 'yes';
    for(let j = 0; j < numArr.length; j++) {
      if(numArr[j] !== numArr[(numArr.length - 1) - j]) {
        check = 'no'
        break;
      }
    }
    console.log(check);
  }
};

Solved(inputData);