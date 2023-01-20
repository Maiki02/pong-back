export let players:string[]=[];

export function createPlayer(player: any){
    return player;
}

export function addPlayer(player:any){
    try{
        //Si existe el jugador, retornamos que no se puede agregar
        const playerToSave=player.toLowerCase();
        if(isPlayerInPlayers(playerToSave)){
            return -1;
        } else {
            players.push(playerToSave);
            return 1;
        }
    } catch(err){
        return 0;
    }
}

export function getPlayers(){
    return players;
}

export function getPlayer(playerParam:any){
    const playerParamLower=playerParam.toLowerCase();
    return players.find( (player:any) => player === playerParamLower);
    // return players.find(player => player.id === id);
}

export function isPlayerInPlayers(playerParam:string){
    return indexOfPlayer(playerParam) != -1 ;
}

export function indexOfPlayer(playerParam:string){
    return players.indexOf(playerParam.toLowerCase());
}

export function deletePlayer(index:number){
    return players.splice(index,1);
}