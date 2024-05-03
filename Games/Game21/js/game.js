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
let coin1;
let isCreatedCoin1 = false;
let coin2;
let coin3;
let coin4;
let counter = 4;
let R;


function preload() {
    game.load.spritesheet('p1','pictures/backgrounds/dude.png',285 / 9 , 42)
    game.load.image('platform','pictures/backgrounds/platform.png')
    game.load.image('bg','pictures/backgrounds/desert.png')
    game.load.spritesheet('coin','pictures/backgrounds/coin.png',1198 / 5, 704 / 2)
}
    
function create() {
    createBackground()
    createPlatforms()
    createButtons()
    createPlayer()   
    createCoins()
}

function createBackground(){
    let bg = game.add.image(0,0,'bg')
    bg.width = game.width
    bg.height = game.height
}

function createPlatforms(){
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

   let flag =  game.physics.arcade.collide(player1, ground) || 
   game.physics.arcade.collide(player1, platform1) || 
   game.physics.arcade.collide(player1, platform2) 
   

   if(space.isDown && flag){
        player1.frame = 4 
        player1.body.velocity.y = -300 
   }

   game.physics.arcade.collide(player1, coin1,function(){
        coin1.kill()
        counter--;
   })

   game.physics.arcade.collide(player1, coin2,function(){
        coin2.kill()
        counter--;
   })

   game.physics.arcade.collide(player1, coin3,function(){
        coin3.kill()
        counter--;
   })

   game.physics.arcade.collide(player1, coin4,function(){
        coin4.kill()
        counter--;
   })
}

function createButtons(){ 
    A = game.input.keyboard.addKey(Phaser.Keyboard.A)
    D = game.input.keyboard.addKey(Phaser.Keyboard.D)
    W = game.input.keyboard.addKey(Phaser.Keyboard.W)
    S = game.input.keyboard.addKey(Phaser.Keyboard.S)
    R = game.input.keyboard.addKey(Phaser.Keyboard.R)
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

}

function createCoins(){
    coin1 = createCoin(110,250)
    coin2 = createCoin(410,50)
    coin3 = createCoin(500,300)
    coin4 = createCoin(400,350)
}

function createCoin(x,y){
    
    let coin = game.add.sprite(x,y,'coin')
    coin.animations.add('coin-animations' , [0,1,2,3,4,5,6,7,8,9] , 13 ,true);
    coin.animations.play('coin-animations')
    coin.scale.setTo(0.25)
    game.physics.arcade.enable(coin)
    coin.body.immovable = true

    return coin;
}

function update(){ 
    
    if(counter != 0){
        movePlayer()
    }else{
        create()
        counter = 4;
    }

}












