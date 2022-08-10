function solution(id_list, report, k) {
    var answer = [];
      
    let rpt = [];
    for(let i = 0; i<id_list.length; i++){
        rpt[i] = [id_list[i], 0, []];
    }
    
    for(let i = 0; i < report.length; i++){
        let reportSplit = report[i].split(" ");
        for(let j = 0; j<rpt.length; j++){
            if(reportSplit[1] == rpt[j][0]){
                rpt[j][1]++;
                rpt[j][2].push(reportSplit[0]);
            }
        }
    }
    
    let result = [];
    for(let i = 0; i<id_list.length; i++){
        result[i] = 0;
    }
    
    for(let i = 0; i<id_list.length; i++){
        if(rpt[i][1] >= k){
            let pps = rpt[i][2];
            for(let j = 0; j<pps.length; j++){
                if(pps[j] == id_list[i]){
                    result[i]++;
                }
            }
        }
    }
    
    
    
    return result;
}



solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)