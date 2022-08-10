/* 
 * `codeOwnersMap`과 `directory`를 입력받아
 * `directory`의 코드 주인 목록을 반환하는 함수를 작성하세요.
 */

// function solution(codeOwnersMap, directory) {

//     let nameArr = directory.split("/");
//     let results = codeOwnersMap;

//     for(let i = 0; i<nameArr.length; i++){
//         results1 = results.nameArr[i];
//         results2 = results1.nameArr[i]
//     }
//     return results;

// }

let codeOwnersMap = {
    "scripts" : ["배수진"],
    "services" : {
        "business-ledger" : ["고찬균", "배수진"],
        "toss-card" : ["채주민", "유재섭"],
        "payments" : ["유재섭"]
    }
}

let directory = "services/payments";

let nameArr = directory.split("/");
let test1 = codeOwnersMap[nameArr[0]];
console.log(test1[nameArr[1]]);


// solution(OwnersMap, "services/payments");
