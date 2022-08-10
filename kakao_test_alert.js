function solution(id_list, report, k) {
    
    let answer = [];

    let alertId = new Map();
    for(let i = 0; i<id_list.length; i++){
        alertId.set(id_list[i], 0);
    }



    let reported = new Map();
    for(let i = 0; i<id_list.length; i++){
        reported.set(id_list[i], []);
    }

    for(let i = 0; i < report.length; i++){
        reportSplit = report[i].split(" ");
        if(!reported.get(reportSplit[1]).includes(reportSplit[0])){
            reported.get(reportSplit[1]).push(reportSplit[0])
        }
    }

    console.log(reported);

    for(let i = 0; i<id_list.length; i++){
        if(reported.get(id_list[i]).length >= k){
            for(let j = 0; j < reported.get(id_list[i]).length; j++){
                let newNum = alertId.get(reported.get(id_list[i])[j])+1;
                alertId.set(reported.get(id_list[i])[j], newNum);
            }
        }
    }

    for(let i = 0; i < id_list.length; i++){
        answer[i] = alertId.get(id_list[i]);
    }

    
    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);