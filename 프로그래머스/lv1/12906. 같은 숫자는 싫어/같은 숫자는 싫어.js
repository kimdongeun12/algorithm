function solution(arr)
{
    const answer = [];
//     let oldNum = null
//     arr.map((cur ) => {
//         if(oldNum !== cur){
//             answer.push(cur)
//         }
//         oldNum = cur
//     })
    
    for(let i=0; i< arr.length; i++){
        if(arr[i] !== arr[i+1]) answer.push(arr[i])
    }
    
    return answer;
}