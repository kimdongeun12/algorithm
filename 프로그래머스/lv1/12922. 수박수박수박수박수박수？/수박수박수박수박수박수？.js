function solution(n) {
    const answer = Array(n).fill(0).reduce((acc , _ , idx) => {
        if(idx % 2 === 0) {
            acc += '수'
        } else {
            acc += '박'
        }
        return acc;
    }, '')
    return answer;
}