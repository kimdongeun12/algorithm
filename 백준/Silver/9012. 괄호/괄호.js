const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
  for(let i = 1; i < inputData.length; i++){
    const arr = [];
    const data = inputData[i].split('');
    for(let j = 0; j < data.length; j++) {
      arr.push(data[j]);
      if(arr[arr.length - 1] === ')' && arr[arr.length - 2] === '('){
        arr.pop();
        arr.pop();
      }
    }
    console.log(arr.length > 0 ? 'NO' : 'YES');
  }
};

Solved(inputData);