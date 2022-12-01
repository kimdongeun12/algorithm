function solution(nums) {
//     let answer = 0;
//     let arr = [];
//     let setArr = [...new Set(nums)];
//     answer = nums.length/2 <= setArr.length ? nums.length/2 : setArr.length
    
//     return answer;
    
    const answer = [];
    for(let i=0; i<nums.length; i++){
        if(nums.length/2 !== answer.length && 
           answer.includes(nums[i]) === false) answer.push(nums[i])
    }
    return answer.length
}