'use strict'
const game = new Phaser.Game(1400, 700, Phaser.AUTO, 'game-canvas', { preload, create, update });


let bg;
let player;
let keys;
let bomba;
let speed = 5;
function preload() {
    game.load.image('grass',"images/forest.jpeg");
    game.load.spritesheet('player',"images/sps.png",480/8 ,240/4 );
    game.load.spritesheet('bomba', 'images/bomb.png', 256 /4, 256 / 4);
    keys = game.input.keyboard.createCursorKeys();
}

function create() {
    bg = game.add.sprite(0,0,'grass');
    bg.width = game.width;
    bg.height = game.height;

    player = game.add.sprite(300,300,'player');
    player.scale.setTo(2);
    player.animations.add('run4', [16,17,18,19,20,21,22,23],10,true);
    player.animations.add('run2', [0,1,2,3,4,5,6,7],10,true);
    player.animations.add('run3', [8,9,10,11,12,13,14,15],10,true);
    player.animations.add('run1', [24,25,26,27,28,29,30,31],10,true);

   //bomba = game.add.sprite(200, 400, 'bomba');
    //bomba.animations.add('bomba1', [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 50, true);
    //bomba.animations.play('bomba1');


}

function update() {
    if (keys.up.isDown){
        player.animations.play('run1')
        player.y -= speed;
    } 
    else if (keys.down.isDown){
        player.animations.play('run2')
        player.y += speed;
    } 
    else if (keys.left.isDown){
        player.animations.play('run3')
        player.x -= speed;
    } 
    else if (keys.right.isDown){
        player.animations.play('run4')
        player.x += speed;
    } 
    else {
        player.frame = 0;
    }
  
}