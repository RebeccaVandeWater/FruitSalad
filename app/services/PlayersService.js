import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayersService {

    setActivePlayer(playerId) {
        console.log("Active Player hooked up in service")

        AppState.activePlayer = AppState.players.find(player => player.id == playerId)

        console.log(AppState.activePlayer)
    }

    createPlayer(formData) {
        console.log("button hooked up in player service");

        let newPlayer = new Player(formData);

        AppState.players.push(newPlayer);

        console.log(AppState.players);

        AppState.emit('players');
    }

}

export const playersService = new PlayersService();