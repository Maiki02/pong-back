"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.indexOfPlayer = exports.isPlayerInPlayers = exports.getPlayer = exports.getPlayers = exports.addPlayer = exports.createPlayer = exports.players = void 0;
exports.players = [];
function createPlayer(player) {
    return player;
}
exports.createPlayer = createPlayer;
function addPlayer(player) {
    try {
        //Si existe el jugador, retornamos que no se puede agregar
        const playerToSave = player.toLowerCase();
        if (isPlayerInPlayers(playerToSave)) {
            return -1;
        }
        else {
            exports.players.push(playerToSave);
            return 1;
        }
    }
    catch (err) {
        return 0;
    }
}
exports.addPlayer = addPlayer;
function getPlayers() {
    return exports.players;
}
exports.getPlayers = getPlayers;
function getPlayer(playerParam) {
    const playerParamLower = playerParam.toLowerCase();
    return exports.players.find((player) => player === playerParamLower);
    // return players.find(player => player.id === id);
}
exports.getPlayer = getPlayer;
function isPlayerInPlayers(playerParam) {
    return indexOfPlayer(playerParam) != -1;
}
exports.isPlayerInPlayers = isPlayerInPlayers;
function indexOfPlayer(playerParam) {
    return exports.players.indexOf(playerParam.toLowerCase());
}
exports.indexOfPlayer = indexOfPlayer;
function deletePlayer(index) {
    return exports.players.splice(index, 1);
}
exports.deletePlayer = deletePlayer;
