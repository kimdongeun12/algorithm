const inputData = require('fs').readFileSync('/dev/stdin').toString().split(' ');

function Solved(inputData) {
    let answer = '';
    for(let i= 1; i <= inputData[0]; i++){
        let down = inputData[0] - i;
        answer += ''.padStart(down ,' ');
        for(let j= 0; j < i; j++){
            answer += `*`;
        }
        answer += '\n';
    }
    console.log(answer)
};
Solved(inputData);