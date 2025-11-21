
class Player {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = 50;
        this.positionY = 0;

        this.updateUi()
    }
    updateUi() {
        const playerElm = document.getElementById("player")
        playerElm.style.width = this.width + "vw"
        playerElm.style.height = this.height + "vh"
        playerElm.style.left = this.positionX + "vw"
        playerElm.style.bottom = this.positionY + "vh"

    }
    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--;
            this.updateUi()
        }
    }
    moveRight() {
        if (this.positionX < 100 - this.width){
        this.positionX++;
        this.updateUi();
        }
    }
}

const player = new Player() //crea una instancia de la clase Player

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft()
    } else if (e.code === 'ArrowRight') {
        player.moveRight()
    }
});