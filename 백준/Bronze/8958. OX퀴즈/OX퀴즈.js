const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
    for(let i = 1; i <= inputData[0]; i++){
        let newArr = inputData[i].trim().split('');
        let cnt = 0;
        let numArr = newArr.map((cur , acc) => {
            if(cur !== 'X'){
                cnt++
            }else{
                cnt = 0;
            }
            return cnt;
        })

        console.log(numArr.reduce((acc , cur) => {return acc + cur}));
    }
};

Solved(inputData);