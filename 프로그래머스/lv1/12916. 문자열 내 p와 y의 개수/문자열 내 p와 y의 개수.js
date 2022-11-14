function solution(s){
    let answer = true;
    // let pCheck = /p/gi;
    // let yCheck = /y/gi;
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
    if(pCnt !== yCnt) answer = false
    return answer;
}