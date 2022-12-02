function solution(n) {
    let prev = 0 // 피보나치의 0번쨰 수 = F(n-2)
    let next = 1 // 피보나치의 1번쨰 수 = F(n-1)
    let sum = 1  // F(2) = F(0) + F(1)
    const answer = [];
    for(let i = 2; i<= n; i++) {
        sum = (prev + next) % 1234567;
        answer.push(sum)
        prev = next;
        next = sum;
    }
    return answer[n - 2] ;
}