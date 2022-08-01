let today = new Date();
let lastDay = new Date(2022, 11, 31);

let diffDayM = lastDay.getTime()-today.getTime();
let diffDay = Math.ceil(diffDayM / (1000*60*60*24));   // Math.ceil ==> 올림

document.write("새해까지 남은 일수 : " + diffDay);