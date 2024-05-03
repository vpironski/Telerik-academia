'use strict'
const game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player1
let A
let D
let space

let platforms
let ground
let platform1
let platform2

let coins
let coin1
let coin2
let coin3
let coin4


function preload() {
    game.load.spritesheet('p1','pictures/backgrounds/dude.png',285 / 9 , 42)
    game.load.image('platform','pictures/backgrounds/platform.png')
    game.load.image('bg','pictures/backgrounds/desert.png')
    game.load.spritesheet('coin','pictures/backgrounds/coin.png',1198 / 5, 704 / 2)
}
    
function create() {
    createPlatforms()
    createPlayer()
    createCoins()
    createButtons()
}

function update(){ 
    movePlayer();
}

function createButtons(){
    A = game.input.keyboard.addKey(Phaser.Keyboard.A)
    D = game.input.keyboard.addKey(Phaser.Keyboard.D)
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
}

function createPlatforms(){
    platforms = game.add.group()
    ground = game.add.sprite(0,0,'platform')
    ground.width = game.width
    ground.height = 100
    ground.y = game.height - ground.height
    game.physics.arcade.enable(ground)
    ground.body.immovable = true
    platforms.add(ground)

    platform1 = game.add.sprite(50,350,'platform')
    platform1.scale.setTo(0.2);
    game.physics.arcade.enable(platform1)
    platform1.body.immovable = true
    platforms.add(platform1)

    platform2 = game.add.sprite(300,150,'platform')
    platform2.scale.setTo(0.3);
    game.physics.arcade.enable(platform2)   
    platform2.body.immovable = true
    platforms.add(platform2)
}












