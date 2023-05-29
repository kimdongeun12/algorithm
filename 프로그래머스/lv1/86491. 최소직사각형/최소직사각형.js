const solution = (number) => {
    const arr = number.map((el) => {
        const sortArr = el.sort((a , b) => a - b);
        return sortArr;
    });
    const x = [];
    const y = [];
    arr.forEach((el) => {
        x.push(el[0]);
        y.push(el[1]);
    });
    return Math.max(...x) * Math.max(...y)
}