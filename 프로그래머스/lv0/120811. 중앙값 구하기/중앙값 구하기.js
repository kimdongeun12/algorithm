function solution(array) {
    const half = Math.floor(array.length / 2);
    const answer = array.sort((a , b) => {
        return a < b && -1;
    })[half]
    return answer;
}