class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1")
        title.html("Car Racing Game")
        title.position(120,10)
        var input=createInput("Name")
        input.position(120,150)
        var button=createButton("Play")
        button.position(250,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
        var name = input.value();
        playerCount=playerCount+1
        player.update(name);
        player.updateCount(playerCount);
        var welcome=createElement("h3")
        welcome.html("Welcome to the game"+name)
        welcome.position(150,150)
        });
    }
}