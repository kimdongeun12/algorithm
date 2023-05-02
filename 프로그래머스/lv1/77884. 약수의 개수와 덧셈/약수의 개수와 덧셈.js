function solution(left, right) {
    let answer = Array(Math.abs(left - right) + 1).fill(0).reduce((acc , _ , idx) => {
        let num = left + idx;
        if(getMeasuer(num) % 2 === 0) {
            acc += num;
        } else {
            acc -= num;
        };
        return acc;
    } , 0);
    return answer;
}

function getMeasuer(num) {
    let cnt = 0;
    for(let i = 1; i <= num; i++) {
        if (num % i == 0) {
            cnt++; // 약수 개수
            // i 약수
        }
    }
    return cnt;
}