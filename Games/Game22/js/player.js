function createPlayer(){
    player1 = game.add.sprite(300,300 ,'p1')
    player1.frame = 4
    player1.scale.setTo(1.5)
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

    let flag = game.physics.arcade.collide(player1, platforms)

    if(space.isDown && flag){
        player1.frame = 4 
        player1.body.velocity.y = -300 
    }

    game.physics.arcade.collide(player1, coins, onTouch)

}

function onTouch(player1,coin){
    coin.kill()
}