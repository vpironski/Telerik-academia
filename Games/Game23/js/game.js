'use strict'
const game = new Phaser.Game(800, 400, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player1
let A
let D
let space
let ground
let coins

function preload() {
    game.load.spritesheet('p1','pictures/backgrounds/dude.png',285 / 9 , 42)
    game.load.image('platform','pictures/backgrounds/platform.png')
    game.load.image('bg','pictures/backgrounds/desert.png')
    game.load.spritesheet('coin','pictures/backgrounds/coin.png',1198 / 5, 704 / 2)
}
    
function create() {
    createButtons()
    createPlayer()
    createGround()
    createCoins()
}

function update(){ 
    movePlayer();
    console.log(coins.length)
}

function createButtons(){
    A = game.input.keyboard.addKey(Phaser.Keyboard.A)
    D = game.input.keyboard.addKey(Phaser.Keyboard.D)
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
}

function createGround(){
    ground = game.add.sprite(0,0,'platform')
    ground.width = game.width
    ground.height = 50
    ground.y = game.height - ground.height
    game.physics.arcade.enable(ground)
    ground.body.immovable = true
}

function createCoins(){
    coins = game.add.group()
    coins.enableBody = true

    for(let i = 100; i <= game.width; i+=100){
        coins.create(i,250,'coin')
    }

    //coins.create(100,250,'coin')
    //coins.create(200,250,'coin')
    
    coins.forEach(function(currentCoin){
        currentCoin.scale.setTo(0.2)
        currentCoin.animations.add('coin-animations' , [0,1,2,3,4,5,6,7,8,9] , 13 ,true);
        currentCoin.animations.play('coin-animations')
    })  
}











