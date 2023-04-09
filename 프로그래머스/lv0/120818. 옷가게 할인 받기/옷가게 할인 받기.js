function solution(price) {
    const percent = price >= 500000 ? 20 :
                    price >= 300000 ? 10 :
                    price >= 100000 ? 5 : 0;
    const sale = price * percent * 0.01;
    const answer = Math.trunc(price - sale);
    return answer;
}