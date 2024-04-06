let img1=document.querySelectorAll(".img1")
let img2=document.querySelectorAll(".img2")

let title=document.querySelectorAll(".container > h1")

let randomNumber1=Math.floor(Math.random()*6) + 1

let randomNumber2=Math.floor(Math.random()*6) + 1

let diceNumber1="dice"+randomNumber1

let diceNumber2="dice"+randomNumber2

let dice1=img1[0].setAttribute("src","./images/"+diceNumber1+".png")

let dice2=img2[0].setAttribute("src","./images/"+diceNumber2+".png")

if(randomNumber1 > randomNumber2){
    title[0].textContent="Player1 wins"
}
else if(randomNumber1 < randomNumber2){
    title[0].textContent="player2 wins"
}
else{
    title[0].textContent="Draw"
}