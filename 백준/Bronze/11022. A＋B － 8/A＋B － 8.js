const inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function Solved(inputData) {
    let answer = '';
    for(let i= 1; i <= inputData[0]; i++){
        
        let product = inputData[i].split(' ');
        answer += `Case #${i}: ${Number(product[0])} + ${Number(product[1])} = ${Number(product[0]) + Number(product[1])} \n`
    }
    console.log(answer)
};

Solved(inputData);