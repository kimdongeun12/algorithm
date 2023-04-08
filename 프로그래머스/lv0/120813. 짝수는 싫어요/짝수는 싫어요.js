function solution(n) {
    const answer = Array(n).fill(0).map((_, idx) => idx+1).filter((el) => el % 2 !== 0);
    return answer;
}