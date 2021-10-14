import TeamDataService from '../services/teams.service';
import { Team, newTeam } from '../actions/types';
import { Dispatch } from 'redux';

export type createTeamAction = {
    type: 'CREATE_TEAM'
    payload: Team
}

export type updateTeamAction = {
    type: 'UPDATE_TEAM'
    payload: Team
}

export type getTeamAction = {
    type: 'GET_TEAM'
    payload: Team
}

export type deleteTeamAction = {
    type: 'DELETE_TEAM'
    payload: number
}

export type deleteAllTeamsAction = {
    type: 'DELETE_ALL_TEAMS'
    payload?: never
}

export type Action =
    | createTeamAction
    | updateTeamAction
    | getTeamAction
    | deleteTeamAction
    | deleteAllTeamsAction