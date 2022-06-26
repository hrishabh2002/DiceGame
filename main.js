
var randomNo1=Math.random();
randomNo1*=6;
randomNo1=Math.floor(randomNo1+1);

var randomNo2=Math.random();
randomNo2*=6;
randomNo2=Math.floor(randomNo2+1);

var randImg1="./images/"+"dice"+randomNo1+".png"
var randImg2="./images/"+"dice"+randomNo2+".png"

console.log(randImg1);

document.querySelector(".one img").setAttribute("src",randImg1);
document.querySelector(".two img").setAttribute("src",randImg2);

if(randomNo1>randomNo2)
document.querySelector("h1").innerHTML="Player 1 Win!"
else if(randomNo1===randomNo2)
document.querySelector("h1").innerHTML="Draw!"
else
document.querySelector("h1").innerHTML="Player 2 Win!"




