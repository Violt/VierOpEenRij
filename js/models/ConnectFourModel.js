export class ConnectFourModel extends EventTarget{

    constructor(){
        super();
        this.playerId = 1;
       this.values =[
                       [0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0],
                    ]
    }

    acceptMoveOn(columnId){
       for(let row = 5; row>=0; row--) {
           if (this.values[row][columnId] === 0) {
               this.values[row][columnId] = this.playerId;
               if (this.playerId === 1) {
                   alert ("Rood is aan de beurt!");
                   this.playerId = 2;
               } else {
                   alert ("Geel is aan de beurt!");
                   this.playerId = 1;
               }
               break;
           }
       }
    }

    getValues(){
        return this.values;
    }
}