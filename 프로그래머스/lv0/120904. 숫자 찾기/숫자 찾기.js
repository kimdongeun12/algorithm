function solution(num, k) {
    const answer = String(num).indexOf(k)
    return answer >= 0 ? answer + 1 : answer;
}