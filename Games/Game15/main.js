'use strict'


const game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })
let player1;
let player2;
let player3;
let mouse;

function preload() {
    game.load.image('bg', 'pictures/backgrounds/background-sky (3).png')
    game.load.spritesheet('dude','pictures/spriteSheet/dude-pink.288x40.9x1.png',288 / 8, 40)
}

function create() {
    createBackground()
    player1 = createPlayer(100,100)
    player2 = createPlayer(50,50,2)
    player3 = createPlayer(150,250,3)
    mouse = createMouse();
    
}

function update() {
    player1.x++;
    let leftMouseButton = mouse.leftButton;
    if(leftMouseButton.isDown){
        let x = Phaser.Math.between(0, game.width)
        let y = Phaser.Math.between(0, game.height)
        createPlayer(x,y);
    }
}

/*
function createBackground(){
    let bg = game.add.image(0,0,'bg')
    bg.width = game.width
    bg.height = game.height
}
*/

/*
const createBackground = () =>{
    let bg = game.add.image(0,0,'bg')
    bg.width = game.width
    bg.height = game.height
}
*/

const createBackground = function(){
    let bg = game.add.image(0,0,'bg')
    bg.width = game.width
    bg.height = game.height
    //return bg;
}

const createPlayer = (x,y,size = 1) => {
    let player = game.add.sprite(x,y,'dude');
    frames = [0,1,2,3];
    player.animations.add('left',frames,15,true)
    player.animations.add('left',[5,6,7,8],15,true)
    player.scale.setTo(size)
    return player;
}

const createMouse = () =>{
    return game.input.activePointer
}
