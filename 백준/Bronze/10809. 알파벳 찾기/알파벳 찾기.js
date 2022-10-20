const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

function Solved(inputData) {
    let arr = new Array(26).fill(-1);
    for(let i=0; i<inputData.length; i++){
        let arrIndex = inputData.charCodeAt(i) - 97;
        inputData.indexOf(inputData[i]);
        arr[arrIndex] = inputData.indexOf(inputData[i]);
    }
    console.log(arr.join().replaceAll(',', ' '))
};

Solved(inputData[0]);