export class Game {
    constructor() { }

    static get startButton() {
        return /*html*/`
        <div>
         <button onclick="app.GameController.startGame()">Start Game</button>
        </div>
        `
    }

    static get gameScreen() {

        return /*html*/`
        <div>
            <p id="fruitName">
                Fruit Name
            </p>
            </div>
            <div>
            <p>
                <form onsubmit="app.GameController.playerInput(event)">
                    <input type="text" name="fruitInput" required>
                </form>
            </p>
        </div>
        `
    }
}