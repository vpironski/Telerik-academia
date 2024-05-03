'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })
let fulltime;
let scoreText;
let score = 0;
let counter = 0;
let seconds = 0;
let minutes = 0;

let p1;
let leftButton;
let rightButton;
let downButton;
let upButton;
let dino;
let dinoXposition = Math.floor(Math.random() * game.width);
let dinoYposition = Math.floor(Math.random() * game.height);



function preload() {
    game.load.image("bg","pictures/backgrounds/background-sky-transparent.png")
    game.load.image("dino","pictures/backgrounds/dino (0).png")
    game.load.spritesheet("guy","pictures/spriteSheet/guy.900x920.8x4.png",900/8,920/4)
}

function create() {
    setTimeAndScore();
    game.add.image(0,0,"bg")
    p1 = game.add.sprite(100,100, "guy")
    dino = game.add.sprite(dinoXposition, dinoYposition, "dino")
    dino.anchor.setTo(0.5);
    p1.scale.setTo(0.5);
    p1.anchor.setTo(0.5);
    p1.frame = 8;

    //let frameLeft = [23,24,25,26,27,28,29,30,31];
    p1.animations.add("up-move",[0,1,2,3,4,5,6,7],15,true);
    p1.animations.add("down-move",[8,9,10,11,12,13,14,15],15,true);
    p1.animations.add("right-move",[16,17,18,19,20,21,22,23],15,true);
    p1.animations.add("left-move",[24,25,26,27,28,29,30,31],15,true);

    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    
}

function update() {
    getTime();

    if(leftButton.isDown){
        p1.animations.play("left-move")
        //console.log("left");
        p1.x -= 5;
    }else if(rightButton.isDown){
        p1.animations.play("right-move")
        //console.log("right");
        p1.x += 5;
    }else if(upButton.isDown){
        p1.animations.play("up-move")
        //console.log("up");
        p1.y -= 5;
    }else if(downButton.isDown){
        p1.animations.play("down-move")
        //console.log("down");
        p1.y += 5;
    }else{
        p1.animations.stop();
        p1.frame = 8
    }

    //console.log("p1:" + p1.x)
    //console.log("dino:" + dino.x)

    let halfWidthPlayer =  p1.width / 2;
    let halfWidthDino =  dino.width / 2;
    let halfHeightPlayer =  p1.height / 2;
    let halfHeightDino =  dino.height / 2;

    if(Math.abs(p1.x - dino.x) < halfWidthPlayer + halfWidthDino && 
        Math.abs(p1.y - dino.y) < halfHeightPlayer + halfHeightDino){
        dino.x = Math.floor(Math.random() * game.width)
        dino.y = Math.floor(Math.random() * game.height)
        score++;
        scoreText.setText("Score: " + score)

   } 

}

function setTimeAndScore(){
    let styleText = {
        font: 'Arial Black',
        fontSize:  70,
        fontWeight: 'bold',
        fill: '#ec008c'
    }

    game.stage.backgroundColor = "rgb(50,200,50)";
    fulltime = game.add.text(20,20,"", styleText);
    //fulltime.font = 'Arial Black';
    //fulltime.fontSize = 70;
    //fulltime.fontWeight = 'bold';
    //fulltime.fill = '#ec008c';
    //fulltime.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
    //c = game.add.text(50, 200, "")

    scoreText = game.add.text(400,20,"Score: " + score, styleText);
}

function getTime(){
    counter++;
    seconds = Math.round(counter / 60);

    if(seconds > 60){
        seconds = 0;
        counter = 0;
        minutes++;
    }

    if(minutes > 59){
        minutes = 0;
    }

    let time = ""
    if(minutes < 10){
        time += "0" + minutes
    }else{
        time +=  minutes
    }

    time += ":"

    if(seconds < 10){
        time += "0" + seconds
    }else{
        time +=  seconds
    }
    fulltime.setText(time);
}
