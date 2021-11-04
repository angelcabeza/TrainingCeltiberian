import TeamDataService from '../services/teams.service';
import { Team, newTeam, Action, ActionTypes } from '../actions/types';
import { Dispatch } from 'redux';


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

export const updateTeam = (team: Team) => async (dispatch: Dispatch<Action> ) => {
    try {
        const res = await TeamDataService.update(team,team.id);

        dispatch({
            type: ActionTypes.UPDATE_TEAM,
            payload: {
                id: team.id,
                points: team.points,
                rank: team.rank,
                logo: team.logo,
                name: team.name,
                wins: team.wins,
                losses: team.losses,
                ties: team.ties,
                gamesplayed: team.gamesplayed,
                goalsaganist: team.goalsaganist,
                goalsfor: team.goalsfor
            }
        });
    } catch (err){
        console.log(err);
    }
}


export const deleteTeam = (id: number) => async (dispatch: Dispatch<Action> ) => {
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
