class Game{
    constructor(){

    }
    getState(){
        var get=database.ref("gameState");
        get.on("value",function(data){
           gameState=data.val();
         
        });
    
    }
    update(state){
        var get=database.ref("/");
        get.update({
            gameState:state
        })
    }
    start(){
        if(gameState==0){
player = new Player();
player.getCount();
form = new Form();
form.display();
        }
    }
}