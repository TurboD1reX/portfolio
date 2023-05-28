function openNav() {
    document.getElementById("nav2").style.width = "350px";
  }
  
function closeNav() {
    document.getElementById("nav2").style.width = "0";
  }
function time(){
let czas = new Date();
let h = czas.getHours();
let m = czas.getMinutes();
let s = czas.getSeconds();
if(h<10){h="0"+h}
if(m<10){m="0"+m}
if(s<10){s="0"+s}
h.toString();
m.toString();
s.toString();
let time = document.getElementById("time")
time.innerHTML=`${h}:${m}:${s}`
setTimeout("time()",1000);
}
time();
function data(){
  let czas = new Date();
  let weekday = czas.getDay();
  let data = document.getElementById("data")   
  if(weekday == 1){weekday="Monday"}
  if(weekday == 2){weekday="Tuesday"}
  if(weekday == 3){weekday="Wednesday"}
  if(weekday == 4){weekday="Thursday"}
  if(weekday == 5){weekday="Friday"}
  if(weekday == 6){weekday="Saturday"}
  if(weekday == 0){weekday="Sunday"}
  weekday.toString();
  data.innerHTML = `${weekday}`
}
data();