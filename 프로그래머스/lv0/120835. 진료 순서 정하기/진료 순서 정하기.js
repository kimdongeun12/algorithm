function solution(emergency) {
    const sortArr = [...emergency].sort((a , b) => a > b && -1);
    console.log(sortArr);
    const answer = emergency.map((el) => {
        return sortArr.findIndex((findEl) => el === findEl) + 1;
    });
    return answer;
}