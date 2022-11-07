function solution(arr)
{
    let answer = [];
    let oldNum = null
    arr.map((cur ) => {
        if(oldNum !== cur){
            answer.push(cur)
        }
        oldNum = cur
    })
    
    return answer;
}