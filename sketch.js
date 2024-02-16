var splashscreen;
var playbutton,aboutbutton
var gameState="wait"

function preload(){
    splashscreen = loadImage("assets/The hunters union.gif")

}

function setup(){
createCanvas(windowWidth,windowHeight);


playbutton= createImg("assets/download.jpeg")
playbutton.position(width/2,height-200)
playbutton.size(200,200)



}

function draw(){
    if(gameState=="wait"){
    background(splashscreen);
}
    playbutton.mousePressed(()=>{
        gameState="play"
        playbutton.hide()
   
    })
if(gameState=="play"){
    background("red");
}
}
