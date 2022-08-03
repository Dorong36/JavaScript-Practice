let num = 1;
let slide = (tOrf)=>{
    if(tOrf){
        if(num==9)return;
        num++;
    }else{
        if(num==1)return;
        num--;
    }

    let img = document.getElementById("photo");
    img.setAttribute("src", "./img/"+num+".jpg");
}