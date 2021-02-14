var ball;
var database;
var position;

var gameState = 0;
var playerCount = 0;

//0 state is WAIT state
//1 state is PLAY state
var game, player, form;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
    

}



function draw(){
    background("silver");
    
}

