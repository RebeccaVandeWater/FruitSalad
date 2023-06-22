import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"


class GameService {

    constructor() {

    }

    playerInput(formData) {
        let enteredFruit = formData

        console.log("Here is the input", enteredFruit)

        AppState.activeFruit == formData.fruitInput ? AppState.activePlayer.score++ : Pop.error("that isn't how you spell that")
        console.log(AppState.activePlayer.score);

    }

    setActiveFruit() {
        const chosenFruit = AppState.fruit[Math.floor(Math.random() * AppState.fruit.length)]
        console.log('testing num 1', chosenFruit);
        AppState.activeFruit = chosenFruit
        console.log('testing num 2', AppState.activeFruit);
    }

}

export const gameService = new GameService()