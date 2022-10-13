const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');


function Solved(inputData) {
    const A = parseInt(inputData[0]);
    const B = parseInt(inputData[1]);
    const C = parseInt(inputData[2]);
    
    const result = `${(A+B)%C} ${((A%C) + (B%C))%C} ${(A*B)%C} ${((A%C) * (B%C))%C}`;
    
    console.log(result);
};

Solved(inputData);