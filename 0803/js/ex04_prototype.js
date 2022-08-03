function ChkInfo(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.minWeight;
    this.maxWeight;
}

// prototype 함수 선언 방식
ChkInfo.prototype.getInfo = function(){
    let str = "";
    str+="이름 : "+this.name+", ";
    str+="키 : "+this.height+", ";
    str+="몸무게 : "+this.weight;
    return str;
}

ChkInfo.prototype.getResult = function(){
    this.minWeight = (this.weight-100)*0.9-5;
    this.maxWeight = (this.weight-100)*0.9+5;

    if(this.weight >= this.minWeight && this.weight <= this.maxWeight){
        return "normal";
    }else if(this.weight>this.maxWeight){
        return "exceed";
    }else{
        return "less";
    }
}

let dy = new ChkInfo("do yeong", 179, 86);
let ch = new ChkInfo("chris", 185, 74);
console.log(dy);
console.log(ch);

document.write(dy.getInfo(), "<br>");
document.write(dy.getResult(), "<br>");

document.write(dy.getResult() === ch.getResult());   
// 이 값이 true 라는 것은 두 객체가 같은 함수를 사용하고 있음을 의미
