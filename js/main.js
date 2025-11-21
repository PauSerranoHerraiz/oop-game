
class Player {
    constructor() {
        this.width = 20;
        this.height = 5;
        this.positionX = 50 - this.width/2;
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
        if (this.positionX < 100 - this.width) {
            this.positionX++;
            this.updateUi();
        }
    }
}

class Obstacle {
    constructor() {
        this.width = 10
        this.height = 10
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 100
        this.obstacleElm = undefined

        this.createDomElement()
        this.updateUi()

    }

    createDomElement() {
        // step1: create the element with document.createElement()
        this.obstacleElm = document.createElement("div")

        // step2: add content or modify
        this.obstacleElm.className = "obstacle"

        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board")
        parentElm.appendChild(this.obstacleElm)
    }

    updateUi() {
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.height + "vh"
        this.obstacleElm.style.left = this.positionX + "vw"
        this.obstacleElm.style.bottom = this.positionY + "vh"
    }

    moveDown() {
        this.positionY--;
        this.updateUi()
    }
}

const player = new Player() //crea una instancia de la clase Player
const obstacle1 = new Obstacle()
const obstaclesArr = []; //array con instancias de la clase Obstacle


setInterval(() => {
    const newObstacle = new Obstacle()
    obstaclesArr.push(newObstacle)
}, 5000)

setInterval(() => {
    obstaclesArr.forEach((element, i, arr) =>{
        element.moveDown()
    })
}, 40)

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft()
    } else if (e.code === 'ArrowRight') {
        player.moveRight()
    }
});