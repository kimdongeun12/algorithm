function solution(arr1, arr2) {
    const answer = [[]];
    const sumArr = arr1.map((curArr , parntIdx) => {
        return curArr.map((cur , childIdx) => {
            return cur + arr2[parntIdx][childIdx]
        })
    })
    return sumArr;
}