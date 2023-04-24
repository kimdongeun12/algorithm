function solution(numbers) {
    const answer = numbers.sort((a , b) => a > b && -1);
    return answer[0] * answer[1];
}