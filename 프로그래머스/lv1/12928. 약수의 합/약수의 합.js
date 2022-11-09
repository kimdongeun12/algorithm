function solution(n) {
    let answer = [];
    if(n === 0) return 0
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            answer.push(i)
        }
    }
    return answer.reduce((acc, cur) => acc + cur);
}