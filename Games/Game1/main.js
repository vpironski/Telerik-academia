'use strict'
const Game = new Phaser.Game(1500,800, Phaser.AUTO, 'game-canvas', { preload, create, update })


let mycar;
let keys;
let speed = 4;


function preload() {
    Game.stage.backgroundColor = "#444444";
    Game.load.image('4444','images/4444.png');
    keys = Game.input.keyboard.createCursorKeys();
}

function create() {
    mycar = Game.add.sprite(0,0,'4444');
    
    
    mycar.x = 44;
    mycar.y = 44;
    mycar.width = 222;
    mycar.height =222;
}

function update() {
    if (keys.right.isDown) {
        mycar.x+= speed;
    }
    if (keys.left.isDown){
        mycar.x-= speed;
    }
    if (keys.up.isDown){
        mycar.y-= speed;
    }
    if (keys.down.isDown){
        mycar.y+= speed;
    }


}