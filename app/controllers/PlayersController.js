import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

// SECTION Draw functions
function _drawPlayer() {

    const players = AppState.players;

    let template = '';

    players.forEach(player => template += player.playerTemplate);

    setHTML('playerList', template);
}

function _drawActivePlayer() {
    const active = AppState.activePlayer

    setHTML('activePlayer', active.activePlayerTemplate)
}

export class PlayersController {

    constructor() {

        console.log("The Players Controller has loaded");

        _drawPlayer();

        AppState.on('players', _drawPlayer);

        AppState.on('activePlayer', _drawActivePlayer)
    }

    createPlayer(event) {
        event.preventDefault();

        console.log("button is hooked up");

        const form = event.target;

        const formData = getFormData(form);

        playersService.createPlayer(formData);
    }

    setActivePlayer(playerId) {
        console.log(playerId);

        playersService.setActivePlayer(playerId);
    }

}