function solution(A,B){
    const x = A.sort((a , b) => a - b);
    const y = B.sort((a , b) => b - a);
    const answer = x.reduce((acc , cur , idx) => {
      acc += cur * y[idx];
      return acc
    },0);
    return answer;
}