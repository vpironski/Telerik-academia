'use strict'
const game = new Phaser.Game(700, 700, Phaser.AUTO, 'game-canvas', { preload, create, update })


let m1;
function preload() {
    game.load.image('m1','images/m1.jpg');

}

function create() {
    game.add.sprite(0,0,'m1')
    m1.scale.set(0.1)
}

function update() {

}