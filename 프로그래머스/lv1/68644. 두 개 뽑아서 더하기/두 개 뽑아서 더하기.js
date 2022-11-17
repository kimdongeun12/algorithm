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
    
    
    // const arr = []
    // numbers.map((cur , idx) => {
    //     for(let i = 0; i< numbers.length; i++) {
    //         if(i !== idx) {
    //             arr.push(cur + numbers[i])
    //         }
    //     }
    // })
    // // console.log(Array.from(new Set(arr)))
    // return Array.from(new Set([...arr])).sort((a,b) => a-b)
    
    const answer = new Set([]);
    
    numbers.forEach((num1 , i) => {
        numbers.slice(i+1)
                .forEach(num2 => {
            const sum = num1 + num2;
            answer.add(sum)
        })
    })
    return Array.from(answer).sort((a,b) => a-b)
}