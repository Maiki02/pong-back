"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlayerInPlayers = exports.getPlayer = exports.getPlayers = exports.addPlayer = exports.createPlayer = exports.players = void 0;
exports.players = [];
function createPlayer(player) {
    return player;
}
exports.createPlayer = createPlayer;
function addPlayer(player) {
    //Si existe el jugador, retornamos que no se puede agregar
    if (isPlayerInPlayers(player)) {
        return "El jugador ya existe";
    }
    return exports.players.push(player);
}
exports.addPlayer = addPlayer;
function getPlayers() {
    return exports.players;
}
exports.getPlayers = getPlayers;
function getPlayer(playerParam) {
    return exports.players.find((player) => player === playerParam);
    // return players.find(player => player.id === id);
}
exports.getPlayer = getPlayer;
function isPlayerInPlayers(playerParam) {
    return exports.players.indexOf(playerParam) != -1;
}
exports.isPlayerInPlayers = isPlayerInPlayers;
