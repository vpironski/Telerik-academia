function createCoins(){
    
    coins = game.add.group()

    coin1 = createCoin(110,250)
    coins.add(coin1)

    coin2 = createCoin(410,50)
    coins.add(coin2)
    
    coin3 = createCoin(500,300)
    coins.add(coin3)

    coin4 = createCoin(400,350)
    coins.add(coin4)
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

