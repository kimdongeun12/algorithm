const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

function Solved(inputData) {
    let arr = []
    for(let i=1; i <= inputData[0]; i++){
        let splitArr = inputData[i].split(' ')
        arr.push({age : Number(splitArr[0]) , name : splitArr[1]})
    }
    let ageSort = arr.sort((a , b) => {
        return a.age - b.age;
    })
    for(let k=0; k < inputData[0]; k++){
        console.log(`${ageSort[k].age} ${ageSort[k].name}`)
    }
};

Solved(inputData);