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
        firstEl.forEach((secEl) => {
            if(isNaN(secEl)) answer.push(secEl.idx);
        });
    });
    return answer;
}