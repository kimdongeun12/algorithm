function solution(my_string) {
    const answer = my_string.split('').filter((el) => {
        if(!isNaN(el)) {
            return el;
        };
    }).map(Number).sort((x , y) => {
        return x < y && -1;
    });
    console.log(answer);
    return answer;
}