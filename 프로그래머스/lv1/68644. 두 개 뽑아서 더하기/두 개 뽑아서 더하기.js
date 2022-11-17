function solution(numbers) {
    // let answer = [];
    // numbers.forEach((num , idx) =>{
    //     for(var i = 0; i< numbers.length; i++){
    //         if(i !== idx){
    //             if(!answer.includes(num + numbers[i])){
    //                 answer.push(num + numbers[i]);    
    //             }   
    //         }
    //     }
    // })
    // return answer.sort((a , b) =>  a - b);
    const arr = []
    numbers.map((cur , idx) => {
        for(let i = 0; i< numbers.length; i++) {
            if(i !== idx) {
                arr.push(cur + numbers[i])
            }
        }
    })
    return Array.from(new Set([...arr])).sort((a,b) => a-b)
}