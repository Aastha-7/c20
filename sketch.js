
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600); 
    tom.addAnimation("tomSleeping", cat1); 
    tom.scale = 0.2; 
    jerry = createSprite(200, 600); 
    jerry.addAnimation("jerryStanding", mouse1); 
    jerry.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0;
        tom.addAnimation("cat last image",cat3);
        tom.changeAnimation("cat last image")
        
        jerry.addAnimation("mouse last image ",mouse3);
        jerry.changeAnimation("mouse last image ");
    }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("cat running",cat2);
    tom.changeAnimation("cat running");
    jerry.addAnimation("teasing",mouse2);
    jerry.changeAnimation("teasing");
}
  //For moving and changing animation write code here


}
