import {ObjectId} from 'bson'

export interface Team {
    _id: ObjectId;
    name: string;
    logo: string;
    rank: number;
    wins: number;
    losses: number;
    ties: number;
    gamesplayed: number;
    goalsfor: number;
    goalsaganist: number;
    points: number;
}

export interface newTeam {
    name: string;
    logo: string;
    rank: number;
    wins: number;
    losses: number;
    ties: number;
    gamesplayed: number;
    goalsfor: number;
    goalsaganist: number;
    points: number;
}

export interface AuthState {
    token: string;
    username: string;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: boolean;
    msg: string;
}

export enum ActionTypes {
    CREATE_TEAM = "CREATE_TEAM",
    UPDATE_TEAM = "UPDATE_TEAM",
    GET_ALL_TEAMS = "GET_ALL_TEAMS",
    DELETE_TEAM = "DELETE_TEAM",
    DELETE_ALL_TEAMS = "DELETE_ALL_TEAMS",
    GET_TEAM_BY_NAME = "GET_TEAM_BY_NAME"
}

interface CreateTeamAction {
    type: ActionTypes.CREATE_TEAM;
    payload: Team;
}

interface UpdateTeamAction {
    type: ActionTypes.UPDATE_TEAM;
    payload: Team;
}

interface GetTeamsAction {
    type: ActionTypes.GET_ALL_TEAMS;
    payload: Team[];
}

interface DeleteTeamAction {
    type: ActionTypes.DELETE_TEAM;
    payload: ObjectId;
}

interface DeleteAllTeamsAction {
    type: ActionTypes.DELETE_ALL_TEAMS;
}

interface GetTeamByName {
    type: ActionTypes.GET_TEAM_BY_NAME;
    payload: Team[];
}

export type Action =
    | GetTeamsAction
    | UpdateTeamAction
    | DeleteTeamAction
    | DeleteAllTeamsAction
    | GetTeamByName
    | CreateTeamAction;