function solution(n) {
    const answer = Array(n).fill(0).reduce((acc , _ , idx) => {
        acc += ((idx + 1) % 2 === 0) && idx + 1;
        return acc
    },0);
    return answer;
}