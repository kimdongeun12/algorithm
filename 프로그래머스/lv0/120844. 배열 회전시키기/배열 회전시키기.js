function solution(numbers, direction) {
    const dir = direction === 'right' ? 1 : -1;
    const answer = numbers.reduce((acc , cur , idx) => {
        console.log('acc : ', acc ,'cur : ', cur ,'idx : ', idx ,'numbers.length : ', numbers.length);
        let colum = 0;
        if(dir > 0) {
            colum = idx + 1 === numbers.length ? 0 : idx + dir;
        }else {
            colum = idx + dir < 0 ? numbers.length - 1 : idx + dir;
        }
        acc[colum] = cur;
        return acc;
    }, []);
    return answer;
}