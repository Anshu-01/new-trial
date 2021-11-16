var hypnoticBall, database;
var position;

function setup(){
createCanvas(500,500);
database = firebase.database();
console.log(database);
ball = createSprite(250,200,40,40);
ball.shapeColor = "red";
}

function draw(){
    if(keyDown("left")){
        changePosition(-1,0);
    }
    else if(keyDown("right")){
        changePosition(1,0);
    }
    else if(keyDown("up")){
        changePosition(0,-1);
    }
    else if(keyDown("down")){
        changePosition(0,1);
    }
drawSprites();
}

function changePosition(x,y){
ball.x = bal.x + x;
ball.y = ball.y + y;
}