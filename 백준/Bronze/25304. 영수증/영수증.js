const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

function Solved(inputData) {
    let price = 0;
    for(let i=0; i< inputData[1]; i++){
        let product = inputData[i+2].split(' ');
        price += Number(product[0]) * Number(product[1]);
    }
    if(price == inputData[0]){
        console.log('Yes')
    }else{
        console.log('No')
    }
};


Solved(inputData);
