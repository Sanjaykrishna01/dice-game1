function myfunc(){
let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;
let winnerIs = document.getElementById("winner");
let imgDiv1 = document.getElementById("img1");
imgDiv1.src = "./images/dice"+num1+".png";
let imgDiv2 = document.getElementById("img2");
imgDiv2.src = "./images/dice"+num2+".png";
if(num1 < num2){
   winnerIs.innerHTML = "Player 2 wins";
   document.getElementById("pl-2").style.color = "green";
}else if(num1 > num2){
   winnerIs.innerHTML = "Player 1 wins";
   document.getElementById("pl-1").style.color = "green";
}else{
   winnerIs.innerHTML = "Draw ,try again";
}
winnerIs.style.color = "green";
setInterval('autoRefresh()', 3000);
}
function autoRefresh() {
   window.location = window.location.href;
}