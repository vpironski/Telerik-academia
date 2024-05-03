'use strict'
const game = new Phaser.Game(500, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
let time
let second = 0

let bonus
let score = 0

let coins

function preload() {
    game.load.spritesheet('p1','pictures/spriteSheet/guy.900x920.8x4.png',900/8,920/4)
    game.load.spritesheet('coin','pictures/backgrounds/coin.png',1198 / 5, 704 / 2)
}
    
function create() {
     time = game.add.text(0, 0, 'Counter: 0', { font: "20px Arial", fill: "#ffffff", align: "center" })
     bonus = game.add.text(120, 0, 'Bonus: 0', { font: "20px Arial", fill: "#ffffff", align: "center" })

     createPlayer()

     coins = game.add.group()
     coins.enableBody = true

     coins.forEach(function(currentCoin){
          currentCoin.scale.setTo(0.15)
          currentCoin.animations.add('coin-animations' , [0,1,2,3,4,5,6,7,8,9] , 13 ,true)
          currentCoin.animations.play('coin-animations')
    })

     game.time.events.loop(Phaser.Timer.SECOND * 2, addCoinInGroup, this)
     game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this)

}

function update(){ 
     movingPleyer()
     console.log("group coins: " + coins.length)
}

function createPlayer(){
     player = game.add.sprite(game.width/2,game.height/2, 'p1')
     player.anchor.setTo(0.5)
     player.scale.setTo(0.5)
     player.animations.add("up",[0,1,2,3,4,5,6,7],15,true);
     player.animations.add("down",[8,9,10,11,12,13,14,15],15,true);
     player.animations.add("right",[16,17,18,19,20,21,22,23],15,true);
     player.animations.add("left",[24,25,26,27,28,29,30,31],15,true);
     game.physics.arcade.enable(player)
     player.body.collideWorldBounds = true
     //player.body.gravity.y = 250
     //player.body.bounce.y = 0.2
     player.frame = 8
}

function addCoinInGroup(){
     const random = game.rnd.integerInRange(0, game.width)
     coins.create(random, 0, 'coin')

     coins.forEach(function(currentCoin){
          currentCoin.scale.setTo(0.15)
          currentCoin.animations.add('coin-animations' , [0,1,2,3,4,5,6,7,8,9] , 13 ,true)
          currentCoin.animations.play('coin-animations')
          currentCoin.body.gravity.y = 250
          currentCoin.body.collideWorldBounds = true
          currentCoin.body.bounce.y = 0.8
    })
}

function movingPleyer(){ 
     if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
          player.animations.play('left')
          player.body.velocity.x = -500
     }else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){   
          player.body.velocity.x = 500
          player.animations.play('right')
     }else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
          player.body.velocity.y = -500
          player.animations.play('up')
     }else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
          player.body.velocity.y = 500
          player.animations.play('down')
     }else{
          player.body.velocity.x = 0
          player.body.velocity.y = 0
          player.animations.stop()
     }
  
     game.physics.arcade.collide(player, coins, function(p,currentCoin){
          currentCoin.destroy()
          score++;
          bonus.setText('Bonus: ' + score)
     })
}

function updateCounter() {
     second++;
     time.setText('Time: ' + second);
 }



















