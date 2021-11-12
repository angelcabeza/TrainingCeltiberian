import TeamDataService from '../services/teams.service';
import { Team, newTeam, Action, ActionTypes } from '../actions/types';
import { Dispatch } from 'redux';
import {ObjectId} from 'bson'


export interface State {
    teamsVector: Team[];
}

export const createTeam = (team: newTeam) => async (dispatch: Dispatch<Action>) => {
    try {
        const res = await TeamDataService.create(team);

        dispatch({
            type: ActionTypes.CREATE_TEAM,
            payload: res.data
        });
    } catch(err) {
        console.log(err);
    }
}

export const getAllTeams = () => async (dispatch : Dispatch<Action>) => {
    try{
        const res = await TeamDataService.getAll();

        dispatch({
            type: ActionTypes.GET_ALL_TEAMS,
            payload: res.data
        });
    } catch (e) {
        console.log(e);
    }
}

export const getTeamByName = (name: string) => async (dispatch: Dispatch<Action>) => {
    try{
        const res = await TeamDataService.findByName(name)

        dispatch({
            type: ActionTypes.GET_TEAM_BY_NAME,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}


export const deleteTeam = (id: ObjectId) => async (dispatch: Dispatch<Action> ) => {
    try {
        const res = await TeamDataService.delete(id);

        dispatch({
            type: ActionTypes.DELETE_TEAM,
            payload: id
        })
    } catch (err) {
        console.log(err);
    }
}

export const deleteAllTeams = () => async (dispatch: Dispatch<Action> ) => {
    try {
        const res = await TeamDataService.deleteAll();

        dispatch({
            type: ActionTypes.DELETE_ALL_TEAMS,
            payload: null
        })
    } catch (err) {
        console.log(err);
    }
}
