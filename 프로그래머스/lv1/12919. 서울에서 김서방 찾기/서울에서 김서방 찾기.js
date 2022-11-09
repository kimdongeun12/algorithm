function solution(seoul) {
    const answer = seoul.findIndex(word => word === "Kim");
    
    return `김서방은 ${answer}에 있다`;
}