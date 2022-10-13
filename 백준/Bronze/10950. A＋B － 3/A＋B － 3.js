const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const lengthNum = parseInt(inputData[0]);

for(let i = 1; i <= lengthNum; i++){
    let numSplit = inputData[i].split(" ");
    console.log(parseInt(numSplit[0]) + parseInt(numSplit[1]));
}