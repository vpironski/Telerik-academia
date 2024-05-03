'use strict'
const game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })

let A
let D
let W
let S
let space
let player1
let speed = 100
let ground
let platform1
let platform2


function preload() {
    game.load.spritesheet('p1','pictures/backgrounds/dude.png',285 / 9 , 42)
    game.load.image('platform','pictures/backgrounds/platform.png')
    game.load.image('bg','pictures/backgrounds/desert.png')
}
    
function create() {
    createBackground()
    createButtons()
    createPlayer()    
}

function createBackground(){
    let bg = game.add.image(0,0,'bg')
    bg.width = game.width
    bg.height = game.height
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

function createPlayer(){
    player1 = game.add.sprite(300,300 ,'p1')
    player1.frame = 4
    //player1.scale.x = 2;
    //player1.scale.y = 2;
    player1.scale.setTo(2)
    //player1.y = game.height - player1.height
    player1.animations.add('left-move',[0,1,2,3],8,true)
    player1.animations.add('right-move',[5,6,7,8],8,true)
    game.physics.arcade.enable(player1)
    player1.body.collideWorldBounds = true
    player1.body.gravity.y = 250
    player1.body.bounce.y = 0.2

}

function movePlayer(){
    if(A.isDown){
        //console.log("A")
        player1.animations.play('left-move')
        player1.body.velocity.x = -300
   }else if(D.isDown){
        //console.log("D")
        player1.body.velocity.x = 300
        player1.animations.play('right-move')
   }else{
        player1.body.velocity.x = 0
        player1.animations.stop()
   }
   let flag = touch();

   if(space.isDown && flag){ 
        player1.frame = 4 
        player1.body.velocity.y = -300 
   }
}

function createButtons(){ 
    A = game.input.keyboard.addKey(Phaser.Keyboard.A)
    D = game.input.keyboard.addKey(Phaser.Keyboard.D)
    W = game.input.keyboard.addKey(Phaser.Keyboard.W)
    S = game.input.keyboard.addKey(Phaser.Keyboard.S)
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

}

function update(){ 
    //console.log("groud " + game.physics.arcade.collide(player1, ground));
    //console.log("platform1 " + game.physics.arcade.collide(player1, platform1));
    //console.log("platform2 " + game.physics.arcade.collide(player1, platform2));
    movePlayer()
}

function touch(){
    return game.physics.arcade.collide(player1, ground) ||
    game.physics.arcade.collide(player1, platform1) ||
    game.physics.arcade.collide(player1, platform2)
}










