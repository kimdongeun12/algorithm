function solution(rsp) {
    const answer = rsp.split('').map((el) => {
        return el === '2' ? 0 : 
                el === '0' ? 5 : 2;
    }).join('');
    return answer;
}