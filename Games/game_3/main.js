'use strict'
const game = new Phaser.Game(650, 650, Phaser.AUTO, 'game-canvas', { preload, create, update })


let m1;
let m2;
let m3;
let m4;

let m2Direction = speed;
let m1Direction = 2;
let m3Direction = speed;
let m4Direction = - 2;

function preload() {
    game.stage.backgroundColor = "#396104";
    game.load.image('m1','images/m1.jpg');
    game.load.image('m2','images/m2.jpeg');
    game.load.image('m3','images/m3.jpeg');
    game.load.image('m4','images/m4.jpeg');

}

function create() {
    m1 = game.add.sprite(0,0,'m1');
    m1.anchor.x = 0;
    m1.anchor.y = 0;
    m1.scale.setTo(0.22);


    m2 = game.add.sprite(0,650,'m2');
    m2.anchor.x = 0;
    m2.anchor.y = 1;
    m2.scale.setTo(0.4);


    m3 = game.add.sprite(650,650,'m3');
    m3.scale.setTo(0.4);
    m3.anchor.x = 1;
    m3.anchor.y = 1;


    m4 = game.add.sprite(650,0,'m4');
    m4.anchor.setTo(1);
    m4.scale.setTo(0.4);


}

function update() {
    m1.y += m1Direction;

    //m1.x++;
    //m2.y--;
    //m3.x--;
    
    //if (m1.y >= game.height - m1.height){
    //    m1Direction = -speed;
    //}

    //if(m1.y <= 0){
    //    m1Direction = +speed;
    //}

    //m4.x += m4Direction

    //if(m4.x <= 0 + m4.width){
    //    m4.x = m4Direction = 2;
   // }

    ///if(m4.x > game.width){
    //    m4Direction = -1;

    //}

 
}