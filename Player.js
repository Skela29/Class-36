class Player{
    constructor(){

    }
    getCount(){
        var get=database.ref("playerCount");
        get.on("value",function(data){
           playerCount=data.val();
         
        });
    
    }
    updateCount(count){
        var get=database.ref("/");
        get.update({
            playerCount:count
        })
    }
    update(Name){
        var pindex="player"+playerCount
        database.ref(pindex).set({
            name:Name
        })
    }
}