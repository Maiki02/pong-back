"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayerParam = exports.createPlayerParam = exports.getPlayersParam = void 0;
const playerModule = __importStar(require("../moduls/players"));
function getPlayersParam(req, res) {
    const response = {
        "status": "ok",
        "code": 200,
        "message": "Lista de jugadores",
        "data": playerModule.getPlayers()
    };
    res.status(200).json(response);
}
exports.getPlayersParam = getPlayersParam;
function createPlayerParam(req, res) {
    const addPlayer = playerModule.addPlayer(req.body.name);
    const response = {
        "status": addPlayer == 1 ? "ok" : "error",
        "message": addPlayer == 1 ? "Jugador agregado" : "El jugador ya existe",
        "code": addPlayer == 0 ? 404 : 200,
    };
    res.status(response.code).json(response);
}
exports.createPlayerParam = createPlayerParam;
function deletePlayerParam(req, res) {
    const playerToDelete = playerModule.indexOfPlayer(req.body.name);
    let message = "";
    let data = [];
    if (playerToDelete != -1) {
        data = playerModule.deletePlayer(playerToDelete);
        message = "Jugador eliminado";
    }
    else {
        message = "El jugador no existe";
    }
    const response = {
        "status": "ok",
        "code": 200,
        "message": message,
        "data": data
    };
    res.status(200).json(response);
}
exports.deletePlayerParam = deletePlayerParam;
