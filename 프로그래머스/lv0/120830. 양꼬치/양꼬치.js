const skewers = 12000
const drink = 2000
function solution(n, k) {
    const service = Math.floor(n / 10);
    const answer = (n * skewers) + (k * drink) - (service * drink);
    return answer;
}