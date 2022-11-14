function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    let mapArr = s.toLowerCase().split('').forEach((cur) => {
        if(cur === 'p') {
            pCnt++
        }
        if(cur === 'y') {
            yCnt++
        }
    })
    return pCnt !== yCnt ? false : true;
}