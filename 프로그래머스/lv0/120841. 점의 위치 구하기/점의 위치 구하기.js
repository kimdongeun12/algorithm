function solution(dot) {
    const [ first , second ] = dot;
    const answer = first > 0 ? (second > 0 ? 1 : 4)
                             : (second > 0 ? 2 : 3);
    return answer;
}

// 1 , 1 1
// -1 , 1 -3
// -1 , -2 -4
// 1 , -2 0

// 3 , 2 = 1
// -3 , 2 = 2 
// -3 , -2 = 3
// 3 , -2 = 4