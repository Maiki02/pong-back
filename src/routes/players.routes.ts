import { Router } from 'express';
import { createPlayerParam, deletePlayerParam, getPlayersParam } from '../functions-request/players';

export const GET_PLAYERS='/getplayers';
export const CREATE_PLAYER='/createplayer';
export const DELETE_PLAYER='/disconnect';

export const router = Router();

router.post(CREATE_PLAYER,(req,res)=>createPlayerParam(req,res));
router.get(GET_PLAYERS, (req,res)=>getPlayersParam(req,res));
router.post(DELETE_PLAYER,(req,res)=>deletePlayerParam(req,res));

