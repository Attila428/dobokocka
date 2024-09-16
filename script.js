let screen = document.getElementById("screen");
let dice = document.getElementById("dice");

screen.addEventListener("click",function(){
    console.log("hllo");
    const random = Math.floor(Math.random()*6)+1;
    console.log(random);
    dice.src=`dice${random}.png`;
});