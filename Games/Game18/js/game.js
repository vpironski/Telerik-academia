'use strict'
const game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })
let speed = 2
let p1

let leftButton
let rightButton
let upButton
let downButton


function preload() {
    game.load.spritesheet('p1','pictures/backgrounds/dude.png',285 / 9 , 42);
}
    
function create() {
    createBg('#4488AA');
    createPlayer();    

    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
}

function update(){

}

function createBg(bgCode){
    game.stage.backgroundColor = bgCode;
}

function createPlayer(){
    p1 = game.add.sprite(game.width / 2,game.height / 2,'p1')
    p1.frame = 4
    p1.scale.setTo(2,2)
    game.physics.arcade.enable(p1)
    //p1.body.gravity.y = 100;
    //p1.body.gravity.x = 30;
    //p1.body.gravity.x = 200;
    p1.body.velocity.x = 200
    p1.body.velocity.y = 200
    p1.body.collideWorldBounds = true
    p1.body.bounce.y = 1;
    p1.body.bounce.x = 1;
}

function checkPlayerOurFromGameWord(){
   
}









