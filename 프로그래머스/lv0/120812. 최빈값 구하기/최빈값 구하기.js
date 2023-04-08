function solution(array) {
    const numObj = array.reduce((acc , cur) => {
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
    }, {});
    const numArr = [];
    for(let key in numObj) {
        numArr.push(numObj[key]);
    }
    const maxNum = Math.max(...numArr);
    const filterNum = Object.entries(numObj).filter((el) => {
        return el[1] === maxNum;
    })
    return filterNum.length > 1 ? -1 : Number(filterNum[0][0]);
}