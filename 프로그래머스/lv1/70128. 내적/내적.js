function solution(a, b) {
    // var answer = 0;
    // for(var i = 0; i < a.length; i++){
    //     answer += a[i] * b[i]
    // }
    // return answer
    const sum = a.reduce((acc , cur , idx) => {
        return acc += cur * b[idx]
    } , 0)
    
    return sum
}