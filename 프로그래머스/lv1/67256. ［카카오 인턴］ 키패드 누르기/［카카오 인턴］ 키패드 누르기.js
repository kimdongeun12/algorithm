// const leftNumbers = [1,4,7] // 왼쪽 키패드에 해당하는 숫자
// const rightNumbers = [3,6,9]// 오른쪽 키패드에 해당하는 숫자
const [leftNumbers, rightNumbers] = [[1,4,7],[3,6,9]]

function solution(numbers, hand) {
//     let answer = '';
    
//     const keypad = {
//         1: [1,1], 2: [1,2], 3:[1,3],
//         4: [2,1], 5: [2,2], 6:[2,3],
//         7: [3,1], 8: [3,2], 9:[3,3],
//         '*': [4,1], 0: [4,2], '#':[4,3] 
//     };
//     let nowL = [4,1]; 
//     let nowR = [4,3];
    
//     numbers.forEach(num => {
//         let numLocation = keypad[num];

//         if(numLocation[1] === 1) {
//             // 왼손
//             nowL = numLocation;
//             answer += 'L';
//         } else if (numLocation[1] === 3) {
//             // 오른손
//             nowR = numLocation;
//             answer += 'R';
//         }else{
//             let distanceL = getDistance(nowL, numLocation);
//             let distanceR = getDistance(nowR, numLocation);
//             if(distanceL === distanceR){
//                  if(hand === "left") {
//                     nowL = numLocation;
//                     answer += 'L';
//                 } else {
//                     nowR = numLocation;
//                     answer += 'R';
//                 }
//             }else if (distanceL < distanceR ){
//                 nowL = numLocation;
//                 answer += 'L';
//             } else {
//                 nowR = numLocation;
//                 answer += 'R';
//             }
//         }
//     });
    
//     function getDistance(arr1, arr2) {
//         let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]); 
//         return result; 
//     }
//     console.log(answer);
//     return answer;
    
//     let answer = '';
//     // 현재 손가락의 위치를 저장
//     const current = {
//         left : 10,
//         right : 12
//     }
//     for(let i=0; i<numbers.length; i++){
//         if(leftNumbers.includes(numbers[i])){
//             // 현재 누를 번호가 왼쪽 키패드에 해당한다면( = 왼쪽 손가락으로 누른다)
//             answer += 'L';
//             current['left'] = numbers[i]; // 손가락의 위치 변경
//         }else if(rightNumbers.includes(numbers[i])){
//             // 현재 누를 번호가 오른쪽 키패드에 해당한다면( = 오른쪽 손가락으로 누른다)
//             answer += 'R';
//             current['right'] = numbers[i]; // 손가락의 위치 변경
//         }else{
//             // 가운데 키패드
//             const locationObj = {...current} // 왼쪽과 오른쪽의 손가락 위치 저장
//             for(let hand in locationObj){
//                 // 0번을 눌렀을때의 예외처리 = 0번은 11번으로 가져오도록
//                 numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
//                 // 왼쪽과 오른쪽의 거리값
//                 let location = Math.abs(numbers[i] - locationObj[hand])
//                 // 거리가 3칸 차이가 난다면 상하 이동이 가능
//                 if(location >= 3) location = Math.trunc(location/3) + location % 3;
//                 locationObj[hand] = location
                
//             }
//             console.log(numbers[i],locationObj)
//             // 왼쪽 손가락과 오른쪽 손가락의 위치가 서로 동일한 경우
//             // 주로 사용하는 손가락(hand 매개변수)을 이용해서 누른다.
//             if(locationObj['left'] === locationObj['right']){
//                 answer += hand === 'left' ? 'L' : 'R'
//                 current[hand] = numbers[i]
//             }else{
//                 if(locationObj['left'] > locationObj['right']){
//                     // 오른손이 더 가까운 경우
//                     answer += 'R';
//                     current['right'] = numbers[i];
//                 }else{
//                     answer += 'L';
//                     current['left'] = numbers[i];
//                 }
//             }
//         }
//     }
//     return answer
    
    // 현재 손가락의 위치를 저장
    const current = {
        left : 10,
        right : 12
    }
    const answer = numbers.reduce((acc , cur) => {
        // useFinger : 어떤손가락으로 눌렀는지에 대한 최종 리턴값('L','R')
        // target    : 왼손인지 오른손인지('left' , 'right')
        // number    : 최종적으로 누른 번호 키패드(숫자 : 1 ~ 11)
        let [useFinger,target, number] = ['','',0]
        if(leftNumbers.includes(cur)){
            [useFinger, target, number] = ['L' , 'left' , cur]
        }else if(rightNumbers.includes(cur)){
            [useFinger, target, number] = ['R' , 'right' , cur]
        }else {
            const fingers = Object.entries(current)
                                  .reduce((acc2 , cur2) => {
                                      const targetHand = cur2[0];
                                      cur = cur === 0 ? 11 : cur;
                                      let location = Math.abs(cur - cur2[1])
                                      if(location > 2) location = Math.trunc(location/3) + location % 3;
                                      acc2[targetHand] = location;
                                      return acc2
                                  }, {})
            if(fingers['left'] === fingers['right']){
                [useFinger , target, number] = [hand === 'left' ? 'L' : 'R' , hand, cur ]
            }else if(fingers['left'] > fingers['right']){
                [useFinger , target, number] = ['R' , 'right', cur ]
            }else {
                [useFinger , target, number] = ['L' , 'left', cur ]
            }
        }
        current[target] = number;
        return acc + useFinger;
    },'')
    return answer
}