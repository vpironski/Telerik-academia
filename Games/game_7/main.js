'use strict'
const Game = new Phaser.Game(1350, 700, Phaser.AUTO, 'game-canvas', { preload, create, update })


let player;
let speed = 6;
let state = 'right';


function preload() {
    Game.load.image('bg', 'images/bg.jpg');
    Game.load.spritesheet('playerSH', 'images/playerss.png', 576 / 9, 256/ 4);
}

function create() {
    let background = Game.add.sprite(0, 0, 'bg');
    background.width = Game.width;
    background.height = Game.height;


    player = Game.add.sprite(0, 0, 'playerSH')
    player.anchor.setTo(1);
    player.width = 80;
    player.height = 100;
    player.animations.add('walk-up', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true)
    player.animations.add('walk-down', [18, 19, 20, 21, 22, 23, 24, 25, 26], 10, true)
    player.animations.add('walk-left', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true)
    player.animations.add('walk-right', [27, 28, 29, 30, 31, 32, 33, 34, 35], 10, true)
}

function update() {
    if (state == 'right'){
        player.angle = 180;
        player.x += speed;
        player.animations.play('walk-left');
        if (player.x >= Game.width - player.width / 2){
            state = 'down';
        }
    } else if (state == 'down'){
        player.angle = 270;
        player.y += speed;
        if (player.y >= Game.height - player.width / 2){
            state = 'left';
        }
    } else if (state == 'left'){
        player.angle = 0;
        player.x -= speed;
        if (player.x <= player.width / 2){
            state = 'up';
        }
    } else if (state == 'up') {
        player.angle = 90;
        player.y -= speed;
        if (player.y <= player.width / 2){
            state = 'right';
        }
    }
}

