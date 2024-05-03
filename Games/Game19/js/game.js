'use strict'
const game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })
let speed = 2
let p1

let leftButton
let rightButton
let upButton
let downButton
let space
let ground
let platform1
let platform2


function preload() {
    game.load.spritesheet('p1','pictures/backgrounds/dude.png',285 / 9 , 42);
    game.load.image('platform','pictures/backgrounds/platform.png')
}
    
function create() {
    createBg('#4488AA')
    createPlayer() 
    createButtons()   
    createPlatform()
}

function createPlatform(){

    ground = game.add.sprite(0,0,'platform')
    ground.width = game.width
    ground.height = 100
    ground.y = game.height - ground.height
    game.physics.arcade.enable(ground)
    ground.body.immovable = true


    platform1 = game.add.sprite(50,350,'platform')
    platform1.scale.setTo(0.2);
    game.physics.arcade.enable(platform1)
    platform1.body.immovable = true

    platform2 = game.add.sprite(300,150,'platform')
    platform2.scale.setTo(0.3);
    game.physics.arcade.enable(platform2)
    platform2.body.immovable = true

}


function createButtons(){
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
}

function update(){

    let c = game.physics.arcade.collide(p1, ground)
    console.log(c);
    game.physics.arcade.collide(p1, platform1);
    game.physics.arcade.collide(p1, platform2);

    if(rightButton.isDown){
        p1.body.velocity.x = 300
    }else if(leftButton.isDown){ 
        p1.body.velocity.x = -300
    }

    if(space.isDown && c){
        p1.body.velocity.y = -400
    }

}



function createBg(bgCode){
    game.stage.backgroundColor = bgCode;
}

function createPlayer(){
    p1 = game.add.sprite(game.width / 2,game.height / 2,'p1')
    p1.frame = 4
    p1.scale.setTo(2,2)
    game.physics.arcade.enable(p1)
    p1.body.gravity.y = 500
    p1.body.collideWorldBounds = true


    //p1.body.gravity.y = 100;
    //p1.body.gravity.x = 30;
    //p1.body.gravity.x = 200;
    //p1.body.velocity.x = 200
    //p1.body.velocity.y = 200
    //p1.body.collideWorldBounds = true
    //p1.body.bounce.y = 1;
    //p1.body.bounce.x = 1;
}
 
function movingPleyer(){
    if(rightButton.isDown){
        p1.body.velocity.x = 300
    }else if(leftButton.isDown){ 
        p1.body.velocity.x = -300
    }
      
    let c = game.physics.arcade.collide(p1, ground);
    console.log(c);
    //console.log(p1.body.onFloor())

    if(space.isDown){
        p1.body.velocity.y = -400
    }
}









