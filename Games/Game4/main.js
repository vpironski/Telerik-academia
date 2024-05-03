'use strict'
const game = new Phaser.Game(400, 400, Phaser.AUTO, 'game-canvas', { preload, create, update })
let counter = 0;
let player;
let player2;
let directionP1 = 1;
let directionP2 = 1;

function preload() {
    game.load.image("p1","pic1.jpg");

    game.load.spritesheet("p1","pictures/pic1.jpg", 660 / 8, 213 / 2);
    game.load.spritesheet("p2","pictures/pic2.png", 840 / 7.7, 570 / 2.5) 
    
    game.stage.backgroundColor = '#505050'
}

function create() {
    
    player = game.add.sprite(0,0,"p1"); // Phaser Sprite
    player.animations.add("right",[0,1,2,3,4,5,6,7],10,true);
    player.animations.add("left",[8,9,10,11,12,13,14,15],10,true);


    player2 = game.add.sprite(0,200,"p1"); // Phaser Sprite
    player2.animations.add("right",[0,1,2,3,4,5,6,7],10,true);
    player2.animations.add("left",[8,9,10,11,12,13,14,15],10,true);

    let styleText = { 
        font: "20px Arial", 
        fill: "#e6ed09"
    };

    game.add.text(game.width / 2,  0, "Score: ", styleText);
}


function update() {
    
    counter++;
    console.log(counter)
    if(counter > 300 && counter < 500 && counter % 2 == 0){
        console.log("Yes: " + counter)
    }
    //logic p1
    console.log(counter);
    if(counter > 180 && counter < 720){
        player.x += directionP1;
        console.log("x: " + player.x);
        console.log("y: " + player.y);
        console.log("----------------------");
    
        if(directionP1 > 0){
            player.animations.play("right");
        }
    
        if(player.x > game.width - player.width){
            player.animations.stop("right", true);
            directionP1 = 0;
        }
    
        //logic p2
        player2.x += directionP2;
        if(directionP2 > 0){
            player2.animations.play("right");
        }
    
        if(directionP2 < 0){
            player2.animations.play("left");
        }
    
        if(player2.x > game.width - player2.width){
            directionP2 = -1;        
        }   
        
        if(player2.x < 0){
            directionP2 = 1;        
        }  
    }else{
        player.animations.stop("right", true);
    }
}