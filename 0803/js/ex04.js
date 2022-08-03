function ChkInfo(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.minWeight;
    this.maxWeight;
    this.getInfo = function(){
        let str = "";
        str+="이름 : "+this.name+", ";
        str+="키 : "+this.height+", ";
        str+="몸무게 : "+this.weight;
        return str;
    }
    this.getResult = function(){
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
}

let dy = new ChkInfo("do yeong", 179, 86);
console.log(dy);

document.write(dy.getInfo(), "<br>");
document.write(dy.getResult());
