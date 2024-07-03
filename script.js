//dice 1
let randomNumber1 = Math.floor(Math.random() * 6) +1;
// console.log(randomNumber1);
let  randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
let  randomDiceSrc1 = "images/" + randomDiceImage1 ; // images/dice1.png - dice6.png
let  image1 = document.querySelectorAll("img")[0];
// console.log(randomDiceSrc);
image1.setAttribute("src",randomDiceSrc1 );
// dice 2
let randomNumber2 = Math.floor((Math.random()* 6)+1);
let  randomDiceImage2 = "dice" + randomNumber2 +".png";
let randomDiceSrc2 = "images/" + randomDiceImage2 ;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSrc2);

// changing h1 
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 player 1 wins";
}else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML =" player 2 wins 🚩";
} else {
    document.querySelector("h1").innerHTML =" Drow 🙏";
}