let email = prompt("your e-mail??", "");
let avail = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

let chk1 = false;
let chk2 = false;

if(email.indexOf("@")>0){chk1 = true;}

for(let i = 0; i<avail.length; i++){
    if(email.search(avail[i])>0){
        chk2 = true;
    }
}

if( chk1 == true && chk2 == true){
    document.write("your email : ", email);
}else{
    alert("email format is wrong")
}