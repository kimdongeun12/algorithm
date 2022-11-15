function solution(arr, divisor) {
    const answer = []
    arr.sort((a , b) => (a - b)).map((cur) => {
        cur % divisor === 0 && answer.push(cur)
    });
    answer.length === 0 && answer.push(-1)
    return answer;
}