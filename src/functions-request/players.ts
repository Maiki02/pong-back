
import * as playerModule from '../moduls/players';
import { Response } from '../shared/interfaces/responses';

export function getPlayersParam(req:any, res:any){
    const response:Response={
        "status": "ok",
        "code": 200,
        "message": "Lista de jugadores",
        "data": playerModule.getPlayers()
    }

    res.status(200).json(response);
}

export function createPlayerParam(req:any, res:any){
    const addPlayer=playerModule.addPlayer(req.body.name);
    const response:Response={
        "status": addPlayer == 1 ? "ok" : "error",
        "message": addPlayer == 1 ? "Jugador agregado" : "El jugador ya existe",
        "code": addPlayer==0?404:200,
    }
    res.status(response.code).json(response);
}

export function deletePlayerParam(req:any,res:any){
    const playerToDelete=playerModule.indexOfPlayer(req.body.name);
    let message:string="";
    let data:any[]=[]
    if(playerToDelete != -1){
        data=playerModule.deletePlayer(playerToDelete);
        message="Jugador eliminado";
    } else {
        message="El jugador no existe";
    }

    const response:Response={
        "status": "ok",
        "code": 200,
        "message": message,
        "data": data
    }

    res.status(200).json(response);
}