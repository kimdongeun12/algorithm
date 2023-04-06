function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    let numer = denom1*numer2 + denom2*numer1;
    let denom = denom1*denom2;
    let maximum = 1
    for(let i = 1 ; i <= numer ; i ++) {
        if(numer%i === 0 && denom%i === 0) {
            maximum = i
        }
    }
    answer.push(numer/maximum , denom/maximum)
    return answer;
}