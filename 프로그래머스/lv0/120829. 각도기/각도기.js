function solution(angle) {
    const answer = Math.ceil(angle / 90) + Math.floor(angle/90);
    return answer;
}