'use strict'
const game = new Phaser.Game(600, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })

let data = [
    {
        question: "What is 20 % 5 ?",
        answers: {
                a: '4',
                b: '0',
                c: 'Error'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 20 / 5 ?",
        answers: {
                a: '4',
                b: '0',
                c: '5'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is 10 % 2 ?",
        answers: {
                a: '5',
                b: 'Error',
                c: '0'
        },
        correctAnswer: 'c'
    }
];

let button;

function preload() {
    game.load.image('bg','pictures/backgrounds/background-starfield.png')
    game.load.spritesheet('button','pictures/backgrounds/button_texture_atlas.png',193, 213 / 3)
}
    
function create() {
    createBg();
    createButton();
}

function update(){
    
}

function createBg(){
    let bg = game.add.image(0,0,'bg')
    bg.width = game.width
    bg.height = game.height
}

function createButton(){
    // The numbers given in parameters are the indexes of the frames, in this order: over, out, down
    button = game.add.button(game.width / 2, game.height / 2, 'button', actionOnClick, this, 0, 1, 2);
    button.anchor.setTo(0.5);
    //createQuestion(1);
}

function createQuestion(numberQuestion){
    let elementInArray = data[numberQuestion]
    //console.log(elementInArray);
    let question = elementInArray.question
    let answers = elementInArray.answers
    //console.log(answers)
    let text = "Question: " + question

    let styleQuestin = {
        fill: "#42E1A5",
        font: "30px Berlin Sans FB"
    }

    let questions = game.add.text(50,50, text, styleQuestin)
    let answer1 = game.add.text(200,100, "a: " + answers.a , styleQuestin)
    let answer2 = game.add.text(200,150, "b: " + answers.b , styleQuestin)
    let answer3 = game.add.text(200,200, "c: " + answers.c , styleQuestin)
}

function actionOnClick () {
    console.log("work");
    let questionNumbers = data.length
    let randomNumber = Math.floor(Math.random() * questionNumbers)
    createBg()
    createButton()
    createQuestion(randomNumber)
    //console.log("click button")
}







