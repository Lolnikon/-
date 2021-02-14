class Form {
    //this login form will be visible as long as the gameState is 0
    //which means unless all 4 players haven't logged in, the game won't start
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h2");
    }
    //all i remeber is <html> and other same things <head> 

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }
    display() {
        var title = createElement('h2');
        title.html("(:{)");
        title.position(130,0);

        this.input.position(130,160);

        this.button.position(250,200);

        this.button.mousePressed(function() {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount = playerCount+1;//understandable 
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(130,160);
        })
    }
}