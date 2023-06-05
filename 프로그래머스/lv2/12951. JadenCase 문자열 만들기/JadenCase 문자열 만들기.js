function solution(s) {
    let answer = '';
    let string = s.toLowerCase().split(' ');
    let stringArr = string.map((cur) => {
        console.log(cur)
        if(cur === "") return cur;
        if(isNaN(cur[0]) !== true) return cur
        return cur.replace(cur[0] , cur[0].toUpperCase())
    });
    answer = stringArr.join(' ');
    return answer;
}