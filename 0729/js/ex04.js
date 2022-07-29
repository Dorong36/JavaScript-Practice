var name = prompt("name", "");
var height = prompt("height?", "0");
var weight = prompt("weight?","0");
// prompt("출력내용", "입력내용")

var result = (height-100)*0.9;
var tf;

if(result >= weight-5 && result<=weight+5){
    tf = "normal";
}else{
    tf = "notnormal";
}

document.write(tf);