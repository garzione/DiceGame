var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].setAttribute("src","images/dice" + dice1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice" + dice2 + ".png");

var ret = "";
if(dice1 > dice2){
  ret = "Player 1 Wins!"
} else if(dice2 > dice1) {
  ret = "Player 2 Wins!"
} else {
  ret = "It's a tie!"
}

document.querySelector("h1").innerHTML = ret;
