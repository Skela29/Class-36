var hypnoticBall, database;
var playerCount,gameState=0,game,player,form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
  game.getState();
  game.start();
}

function draw(){

}
