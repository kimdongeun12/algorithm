function solution(num_list, n) {
    const answer = Array(num_list.length / n).fill(0).map((el , idx) => {
        return num_list.slice(idx * n, (idx * n) + n);
    });
    return answer;
}