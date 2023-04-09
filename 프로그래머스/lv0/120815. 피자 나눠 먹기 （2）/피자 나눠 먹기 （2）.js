function solution(n) {
    let answer = 1;
    let pizza = 6;
    while((pizza * answer) % n !== 0) {
        answer++;
    }
    return answer;
}