'use strict'
const game = new Phaser.Game(800,800, Phaser.AUTO, 'game-canvas', { preload, create, update })
let R;

function preload() {

}

function create() {
    game.add.text(50, 50, "SCORE:", {font: "65px Arial",fill: "#ff0044"});
    R = game.input.keyboard.addKey(Phaser.Keyboard.R)
    //console.log(R);
    console.log(Math.floor(4.424))
}

function update() {
    if(R.isDown){
        console.log(Math.PI)
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        console.log(r);
        console.log(g);
        console.log(b);
        let color = `rgb(${r},${g},${b})`;
        //console.log(color);
        game.stage.backgroundColor = color;
        //console.log("work");
        //game.stage.backgroundColor = '#43F1B0';
        //game.stage.backgroundColor = 'rgb(61,241,176)'
    }
}