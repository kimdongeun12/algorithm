function solution(x, n) {
    const answer = new Array(n).fill(0)
    .map((cur , idx) => {
        return x * (idx + 1)
    });
    return answer;
}