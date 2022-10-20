const inputData = require('fs').readFileSync('dev/stdin').toString().trim().toUpperCase().split('');

function Solved(inputData) {
    let redup = {};
    inputData.forEach((x) => { 
      redup[x] = (redup[x] || 0)+1;
    });
    let arr = Object.values(redup);
    let maxNum = Math.max(...arr);
    let result = Object.keys(redup).filter(key => redup[key] === maxNum);

    if(result.length > 1){
        console.log('?');
    }else {
        console.log(result[0]);
    }
};

Solved(inputData);