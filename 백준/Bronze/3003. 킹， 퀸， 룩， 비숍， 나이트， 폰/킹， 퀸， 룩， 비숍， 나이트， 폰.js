const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

let arr = [1, 1, 2, 2, 2, 8]

console.log(
arr[0] - parseInt(inputData[0]) , arr[1] - parseInt(inputData[1]),
arr[2] - parseInt(inputData[2]) , arr[3] - parseInt(inputData[3]),
arr[4] - parseInt(inputData[4]) , arr[5] - parseInt(inputData[5]),
);