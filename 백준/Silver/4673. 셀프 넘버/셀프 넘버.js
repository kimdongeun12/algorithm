let result = 0;
let selfNumArr = [];
for(let i = 0; i < 10000; i++){
    let num = i;
    // let reduceNum = num.toString().split('').forEach((cur) => { return Number(cur) + Number(cur)})
    let selfNum = num.toString().split('').map(Number).reduce((acc , cur) => {
        return Number(acc) + Number(cur);
    });
    selfNum += num;
    selfNumArr.push(selfNum)
};
selfNumArr.sort((a , b) => {return a - b});
let setSelfArr = Array.from(new Set([...selfNumArr]))
for(let j = 0; j < 10000; j++){
    if(!setSelfArr.includes(j)){
        console.log(j);
    }
};