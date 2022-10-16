const inputData = require('fs').readFileSync(0, 'utf8').toString().split(' ');
let firstNum = Number(inputData[0]);

function Solved(inputData) {
    let resultNum;
    let cnt = 0;
    let C = firstNum.toString().padStart(2, '0');
    let A = Number(C.toString().split('').shift())
    let B = Number(C.toString().split('').pop())
    while (firstNum !== resultNum){
        cnt++
        C = A + B + '';
        A = B;
        B = Number(C.toString().split('').pop());
        resultNum = Number(A + C.toString().split('').pop());
    };
    console.log(cnt)
};

Solved(inputData);