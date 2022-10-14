const inputData = require('fs').readFileSync(0, 'utf8').toString().split('\n');

function Solved(inputData) {
    const compareNum = inputData[0].split(' ').map(Number);
    const targetNum = inputData[1].split(' ').map(Number);
    let answer = '';

    for(let i=0; i <compareNum[0]; i++ ){
        if(compareNum[1] > targetNum[i] ){
            answer += targetNum[i]+' ';
        }
    }
    console.log(answer)
};

Solved(inputData);