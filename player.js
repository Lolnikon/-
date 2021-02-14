class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }//wht is distance for {srry a silly question}

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            //this playerCount is a variable in our code
            playerCount = data.val()
        })
    }

    updateCount(count) {
        database.ref("/").update({
            //this playerCount is the column in db
            playerCount: count
        })
    
    }

    update() {
        var playerIndex = "players/player" + this.index;
        //
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    //static functions do not need an object to call them, they can be caleed just by using the name of the class
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", function(data) {//
            allPlayers = data.val();
        })
    }


}