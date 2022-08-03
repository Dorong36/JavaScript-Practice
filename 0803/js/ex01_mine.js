let num = 1;

let next = ()=>{
    if(num == 9){
        num = 1;
    }else{
        num++;
    }

    let img = document.getElementById("photo");
    img.setAttribute("src", "./img/"+num+".jpg");
}

let pre = ()=>{
    if(num == 1){
        num = 9;
    }else{
        num--;
    }

    let img = document.getElementById("photo");
    img.setAttribute("src", "./img/"+num+".jpg");
}

