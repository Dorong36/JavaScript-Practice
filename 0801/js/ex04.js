document.write("가위바위보 맞추기", "<br><br><br><br>");
let rspInput = prompt("rock scissors paper!", "rock");
let rsp;

switch(rspInput){
    case "rock" : rsp = 0; break;
    case "scissors" : rsp = 1; break;
    case "paper" : rsp = 2; break;
    default : "wrong input";
}

let rspCom = Math.ceil(Math.random()*2);


document.write("컴퓨터 : "+rspCom, "<br><br><br>");
document.write("당신의 픽 : "+rsp, "<br><br><br>");

if(rsp == rspCom){
    document.write("정답");
}else{
    document.write("땡!!");
}
