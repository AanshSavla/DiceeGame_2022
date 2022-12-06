var randomNumber1 = Math.ceil(6*Math.random());
document.getElementsByClassName("img1")[0].src = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.ceil(6*Math.random());
document.getElementsByClassName("img2")[0].src = "images/dice"+randomNumber2+".png";

var titletag = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
  titletag.innerHTML = "🏆<i class='fa fa-sharp fa-solid fa-flag'></i> Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
  titletag.innerHTML = "Player 2 Wins <i class='fa fa-sharp fa-solid fa-flag'></i>🏆";
}
else{
  titletag.innerHTML = "Draw";
}
