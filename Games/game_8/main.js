'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })
let p1;
let positionXtext;
let positionYtext;
let p1Animation;
let direction = "right";
let speed = 3;

function preload() {
    Game.load.spritesheet('p1','pictures/p1.png',480 / 8, 240 / 4)
    Game.stage.backgroundColor = "#4488AA"
}

function create() {
    p1 = Game.add.sprite(0,0,'p1')
    //console.log(p1);
    //console.log(p1.animations);
    //console.log(Game.add.text(50, 150, "", {font: "65px Arial",fill: "#ff0044"}));
    positionXtext = Game.add.text(50, 50, "", {font: "65px Arial",fill: "#ff0044"});
    positionYtext = Game.add.text(50, 150, "", {font: "65px Arial",fill: "#ff0044"});

    p1.animations.add("walk-right", [16,17,18,19,20,21,22,23] , 10, true);
    p1.animations.add("walk-left", [8,9,10,11,12,13,14,15]  ,10, true);
    p1.animations.add("walk-down", [0,1,2,3,4,5,6,7] , 30, 10, true);
    p1.animations.add("walk-up", [24,25,26,27,28,29,30,31] , 10, true);
    //p1.animations.play("right-walk");


    //Анимацията отделена в променлива
    //p1Animation = p1.animations.add("left-walk",[8,9,10,11,12,13,14,15],30,true);
    //p1Animation.play();
}

function update() {
    let mouseXpositionRound = Math.round(Game.input.mousePointer.x)
    positionXtext.text =  "X:" + mouseXpositionRound

    let mouseYpositionRound = Math.round(Game.input.mousePointer.y)
    positionYtext.text =  "Y:" + mouseYpositionRound

    //p1.x += speed

    if(direction == "right"){
        p1.animations.play("walk-right")
        p1.x = p1.x + speed
    }else if(direction == "down"){
        p1.animations.play("walk-down")
        p1.y = p1.y + speed
    }else if(direction == "up"){
        p1.animations.play("walk-up")
        p1.y = p1.y - speed;
    }else if(direction == "left"){
        p1.animations.play("walk-left")
        p1.x = p1.x - speed
    }

    if(p1.x >= Game.width - p1.width){
        direction = "down";
    }

    if(p1.y >= Game.height - p1.height){
        direction = "left";
    }

    if(p1.x < 0  && p1.y != 0){
        direction = "up";
    }

    if(p1.y < 0  && p1.x != 0){
        direction = "right";
    }

    console.log("player X:" + p1.x)
    console.log("player Y:" + p1.y)
 

    //p1.x++;
}