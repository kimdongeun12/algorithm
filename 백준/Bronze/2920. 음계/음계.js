const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

function Solved(inputData) {
    let sheetArr = inputData.map((cur , idx) => {
        let music = '';
        let num = cur;
        if(inputData[idx + 1] !== undefined){
            if(num + 1 == inputData[idx + 1]){
                music = 'ascending';
            }else if(num - 1 == inputData[idx + 1]){
                music = 'descending';
            }else{
                music = 'mixed';
            };
            return music;
        }
    });
    let sortArr = sheetArr.sort((x,y) => {
        if(x < y) return 1;
        if(x > y) return -1;
        if(x === y) return 0;
    });
    console.log(sheetArr.shift());
};

Solved(inputData);