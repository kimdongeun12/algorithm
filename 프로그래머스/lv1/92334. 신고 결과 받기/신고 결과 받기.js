function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    let reportList = {}
    id_list.map((userList)=>{
        reportList[userList] = [];
    })
    report.map(x => { 
        let [userId, reportId] = x.split(" ");
        if(!reportList[reportId].includes(userId)){
            reportList[reportId].push(userId)
        };
    });
    for(const key in reportList){
        if(reportList[key].length >= k){ 
            reportList[key].map((userList)=>{
                answer[id_list.indexOf(userList)] += 1
            })
        }
    }
    return answer;
}