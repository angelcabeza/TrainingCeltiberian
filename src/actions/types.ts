export type Team = {
    id: number;
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

export type newTeam = {
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

export type State = {
    teams: Team[];
    prueba: boolean;
}

export enum ActionTypes {
    CREATE_TEAM = "CREATE_TEAM",
    UPDATE_TEAM = "UPDATE_TEAM",
    GET_TEAM = "GET_TEAM",
    GET_ALL_TEAMS = "GET_ALL_TEAMS",
    DELETE_TEAM = "DELETE_TEAM",
    DELETE_ALL_TEAMS = "DELETE_ALL_TEAMS"
}

interface CreateTeamAction {
    type: ActionTypes.CREATE_TEAM;
    payload: Team;
}

interface UpdateTeamAction {
    type: ActionTypes.UPDATE_TEAM;
    payload: Team;
}

interface GetTeamAction {
    type: ActionTypes.GET_TEAM;
    payload: Team;
}

interface GetTeamsAction {
    type: ActionTypes.GET_ALL_TEAMS;
    payload: Team[];
}

interface DeleteTeamAction {
    type: ActionTypes.DELETE_TEAM;
    payload: number;
}

interface DeleteAllTeamsAction {
    type: ActionTypes.DELETE_ALL_TEAMS;
}

export type Action =
    | GetTeamAction
    | GetTeamsAction
    | UpdateTeamAction
    | DeleteTeamAction
    | DeleteAllTeamsAction
    | CreateTeamAction;