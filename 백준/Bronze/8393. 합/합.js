const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number).sort();

function Solved(inputData) {
    let count = 0;
    for(let i=1; i<=inputData[0]; i++){
        count += i;
    }
    console.log(count)
};

Solved(inputData);