function solution(hp) {
    let answer = 0;
    let cnt = 0;
    let remain = hp;
    while(remain !== 0) {
        cnt++;
        if(remain % 5 !== 0){
            answer += Math.floor(remain / 5);
            remain = remain - (Math.floor(remain / 5) * 5);
            if(remain % 3 !== 0) {
                answer += Math.floor(remain / 3);
                remain = remain - (Math.floor(remain / 3) * 3);
                if(remain % 1 === 0){
                    answer += remain / 1;
                    remain = remain % 1;
                }
            }else {
                answer += remain / 3;
                remain = remain % 3;
            }
        } else {
            answer += remain / 5;
            remain = remain % 5;
        }
        if(cnt > 20){
            return;
        }
    }
    console.log(answer , 'answer')
    return answer;
}