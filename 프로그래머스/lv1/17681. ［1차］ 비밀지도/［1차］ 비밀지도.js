function solution(n, arr1, arr2) {
//     const answer = [];
    
//     for(var i = 0; i < n; i++){
//         let binary = String((arr1[i] | arr2[i]).toString(2)).padStart(n,0);
//         binary = binary.replace(/1/g, '#').replace(/0/g, ' ');
//         answer.push(binary)
//     }

//     return answer;
    
//     const answer = [];
//     for(let = 0; i<arr1.length; i++){
//         const map1 = arr1[i].toString(2).padStart(n,0);
//         const map2 = arr2[i].toString(2).padStart(n,0);
        
//         for(let j=0; j<map1.length; j++){
//             answer[i] += (map1[j] === '1' || map2[j] === '1')
//                          ? '#' // 둘 중 하나라도 벽('1')이라면, 전체 지도에서 벽('3')
//                          : ' ' // 두 개 모두 공백('0')이라면, 전체 지도에서 공백(' ')
//         }
//     }
    const answer = arr1.map((map1, i) => {
        map1 = map1.toString(2).padStart(n ,'0');
        const map2 = arr2[i].toString(2).padStart(n ,'0');
        
        return map1.split('')
                   .reduce((acc , cur, j) => {
                    return acc + (cur === '1' || map2[j] === '1'
                                 ? '#'
                                 : ' ')
                    
                   },'')
    })
    return answer
}
