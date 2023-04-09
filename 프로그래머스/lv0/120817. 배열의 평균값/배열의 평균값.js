function solution(numbers) {
    const sum = numbers.reduce((acc , cur, _ , arr) => {
        acc = acc + cur
        return acc;
    },0);
    const answer = (sum / numbers.length).toFixed(1);
    return answer;
}