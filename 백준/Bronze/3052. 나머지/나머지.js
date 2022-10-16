const inputData = require('fs').readFileSync(0, 'utf8').toString().trim().split('\n')

function Solved(inputData) {
    let Arr = inputData.map((cur) => {
        return cur % 42;
    })
    console.log(Array.from(new Set(Arr)).length)
};

Solved(inputData);