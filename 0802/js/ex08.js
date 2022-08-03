let info = navigator.userAgent.toLowerCase();
let osImg = null;

if(info.indexOf("window")>0){
    osImg = "https://m.commaeng.com/web/product/big/201710/178_shop1_209581.png";
}else if(info.indexOf("macintosh")>0){
    osImg = "https://i.ytimg.com/vi/tBnV3RoYdTg/maxresdefault.jpg";
}
document.write(info+ "<br>")
document.write("<img src = "+osImg+">", "<br>");

let scr = screen;  // scr에 스크린 객체 참조
let sc_w = scr.width;
let sc_h = scr.height;

document.write("모니터 해상도 높이 : " + sc_h + "<br>")
document.write("모니터 해상도 너비 : " + sc_w + "<br>")
