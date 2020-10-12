export class ConnectFourView {

    constructor() {
        this.stapel = document.querySelectorAll('.playbox');
    }

    getClickedColumn(e) {
        let bron = e.target;
        let i;
        for (i = 0; i < this.stapel.length; i++) {
            if (this.stapel[i] === bron) {
                return i % 8;
            }
        }
    }

    addClickHandler(handler) {
        document.querySelector('.game').addEventListener('click', handler);
    }

    showValues(values) {
        for (let row = 0; row < 6; row++) {
            for (let column = 0; column < 8; column++) {
                let value = values[row][column];
                let location= 8*row + column;
                let color;
                switch(value){
                    case 0:
                        color="white";
                        break;
                    case 1:
                        color="red";
                        break;
                    case 2:
                        color = "yellow";
                        break;
                    case 3:
                        color = "green"
                        break;
                }
                this.stapel[location].style.background=color;
            }
        }
    }
}