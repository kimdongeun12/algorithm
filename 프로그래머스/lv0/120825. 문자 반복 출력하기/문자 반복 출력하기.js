function solution(my_string, n) {
    const answer = my_string.split('').reduce((acc , cur) => {
        for(let i = 0; i < n; i++) {
            acc += cur;
        };
        return acc;
    } , '');
    return answer;
}