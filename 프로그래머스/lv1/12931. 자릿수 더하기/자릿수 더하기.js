function solution(n){
    const answer = String(n).split('').reduce((acc , cur) => {
       return Number(acc) + Number(cur)
    },0);

    return answer;
}