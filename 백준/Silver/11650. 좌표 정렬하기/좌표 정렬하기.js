const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n');
const Solved = (inputData) => {
  const [num , ...arr] = inputData.map((el) => el.split(' ').map(Number));
  const sortArr = arr.sort((a , b) => {
    if(b[0] !== a[0]){
      return b[0] > a[0] && -1;
    } else {
      return b[1] > a[1] && -1;
    }
  });
  const mapArr = sortArr.map((el) => el.join(' '));
  console.log(mapArr.join('\n'))
};
Solved(inputData);