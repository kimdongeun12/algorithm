function solution(genres, plays) {
    const answer = [];
    const arr = [];
    const kindObj = genres.reduce((acc , cur , idx) => {
        if(!acc[cur]) {
            acc[cur] = [{idx : idx , plays : plays[idx]}];  
        } else {
            const temp = [
                ...acc[cur],
                {idx : idx , plays : plays[idx]}
            ]
            acc[cur] = [...temp];
        }
        return acc;
    },{});
    for(let key in kindObj) {
        const albumArr = kindObj[key].sort((a , b) => {
            return a.plays > b.plays && -1;
        });
        const total = albumArr.reduce((acc , cur) => {
            acc = acc + cur.plays;
            return acc;
        }, 0);
        const cnt = kindObj[key].length <= 2 ? kindObj[key].length : 2
        const sliceArr = albumArr.slice(0 , cnt);
        arr.push([...sliceArr , total]);
    };
    const sortArr = arr.sort((a , b) => {
        return a[a.length - 1] > b[b.length - 1] && -1;
    });
    arr.forEach((firstEl) => {
        // console.log(firstEl);
        firstEl.forEach((secEl) => {
            if(isNaN(secEl)) answer.push(secEl.idx);
        });
    });
    return answer;
}

// genres : ["classic", "pop", "classic", "classic", "pop"]
// plays : [800, 600, 150, 800, 2500]
// answer : [4, 1, 0, 3]

// 위 케이스를 고려하지 않으면 [4, 1, 3, 0]이 출력 됩니다.


// 총 플레이 수를 합산된 값이 더 큰 장르가 먼저 앞에 오도록 해야 합니다.
// 아래 테스트 케이스에서 [4, 3, 1, 0]이 나온다면 코드를 수정해야 할 것 같네요

// ["pop", "pop", "pop", "rap", "rap"]
// [45, 50, 40, 60, 70]
// 답: [1, 0, 4, 3]