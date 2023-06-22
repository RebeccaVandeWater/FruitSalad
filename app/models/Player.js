import { generateId } from "../utils/generateId.js"

export class Player {
    constructor(data) {
        this.name = data.name
        this.score = 0
        this.id = generateId()
    }

    get playerTemplate() {
        return /*html*/`
            <div class="row">
                <div onclick="app.PlayersController.setActivePlayer('${this.id}')" class="d-flex justify-content-around selectable" >
                    <p>
                    Player: ${this.name}
                    </p>
                    <p>
                    High Score: ${this.score}
                    </p>
                </div>
            </div>
        `
    }

    get activePlayerTemplate() {
        return /*html*/`
            <div class="d-flex justify-content-around">
                <p>
                    Active Player: ${this.name}
                </p>
                <p>
                    Score: ${this.score}
                </p>
            </div>
        `
    }
}