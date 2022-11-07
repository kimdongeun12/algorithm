function solution(arr) {
    let answer = 0;
    let sum = arr.reduce((acc , cur) => {
        return acc + cur;
    })
    answer = sum / arr.length
    return answer;
}