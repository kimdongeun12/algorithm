function solution(n) {
    const answer = Array(n).fill(0).reduce((acc , _ , idx) => {
        const num = idx + 1;
        acc += fnDivisor(num) && 1
        return acc;
    } , 0);
    return answer;
}

function fnDivisor(num) {
    let count = 0;
    for(let i = 1; i<= num; i++) {
        if(num % i === 0) {
            count++;
        }
    }
    return count >= 3 && true;
}