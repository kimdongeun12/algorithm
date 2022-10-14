const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number).sort();

function Solved(inputData) {
    for(let i=1; i<=9; i++){
        console.log(`${inputData[0]} * ${i} = ${inputData[0] * i}`)
    }
};

Solved(inputData);
