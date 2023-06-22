import { AppState } from "../AppState.js"
import { Game } from "../models/Game.js"
import { gameService } from "../services/GameService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"


function _drawFruit() {
    const chosenFruit = AppState.activeFruit

    setText('fruitName', chosenFruit)

    console.log(chosenFruit)
}

function _drawStart() {
    setHTML('gameBox', Game.startButton)
}

function _drawGame() {
    setHTML('gameBox', Game.gameScreen)

    _drawFruit()

}
function _setActiveFruit() {
    gameService.setActiveFruit()
}

export class GameController {
    constructor() {
        // console.log('gamecontroller ests');
        _drawStart()

    }


    // Create a Start Button for the game
    // Start should only work if a player is chosen
    // create a set timeout for the game to end after a time limit
    // update the player score
    // save players to localstorage

    startGame() {
        if (!AppState.activePlayer) {
            Pop.error("Choose a player!")
            return
        }

        setTimeout(_drawStart, 50000)

        _setActiveFruit()
        _drawGame()

    }

    playerInput(event) {
        event.preventDefault()

        const form = event.target

        const formData = getFormData(form)

        console.log(formData)

        gameService.playerInput(formData)

        _drawFruit()
        _setActiveFruit()
    }



}