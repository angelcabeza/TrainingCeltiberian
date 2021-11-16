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


export enum AuthTypes {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    REGISTER_ERROR = "REGISTER_ERROR",
    LOGIN_LOADING = "LOGIN_LOADING"
}

interface LoginSuccessAction {
    type: AuthTypes.LOGIN_LOADING;
}

interface RegisterSuccessAction {
    type: AuthTypes.REGISTER_SUCCESS;
    payload: string;
}

interface RegisterErrorAction {
    type: AuthTypes.REGISTER_ERROR;
    payload: string;
}

interface LoginErrorAction {
    type: AuthTypes.LOGIN_ERROR;
    payload: string;
}

interface CheckToken {
    type: AuthTypes.LOGIN_SUCCESS;
    payload: {username: string; token: string};
}

export type AuthAction =
    | LoginSuccessAction
    | RegisterSuccessAction
    | LoginErrorAction
    | RegisterErrorAction
    | CheckToken;
