import { ActionTypes, Team } from "../../actions/types";
import teamReducer from "../../reducers/teamReducer";
import { State } from "../../actions/teamActions";

describe('Teams reducer', () => {
    const prevState: State = {
        teamsVector: [
            {
                id: 1,
                name: "Real Madrid",
                logo: "https://a.espncdn.com/i/teamlogos/soccer/500/86.png",
                rank: 1,
                wins: 26,
                losses: 3,
                ties: 9,
                gamesplayed: 38,
                goalsfor: 70,
                goalsaganist: 25,
                points: 87
            },
            {
                id: 2,
                name: "FC Barcelona",
                logo: "https://a.espncdn.com/i/teamlogos/soccer/500/83.png",
                rank: 2,
                wins: 25,
                losses: 6,
                ties: 7,
                gamesplayed: 38,
                goalsfor: 86,
                goalsaganist: 38,
                points: 82
            }
        ]
    };

    describe('Get All Teams', () => {

        const newTeams: Team[] = [
            {
                id: 3,
                name: "Atletico de Madrid",
                logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1068.png",
                rank: 3,
                wins: 18,
                losses: 4,
                ties: 16,
                gamesplayed: 38,
                goalsfor: 51,
                goalsaganist: 27,
                points: 70
            },
            {
                id: 4,
                name: "Sevilla",
                logo: "https://a.espncdn.com/i/teamlogos/soccer/500/243.png",
                rank: 4,
                wins: 19,
                losses: 6,
                ties: 13,
                gamesplayed: 38,
                goalsfor: 54,
                goalsaganist: 34,
                points: 70
            },
        ]
        test('GetAllTeams works fine', () => {
            const newState = teamReducer(prevState, {
                type: ActionTypes.GET_ALL_TEAMS,
                payload: newTeams
            });

            expect(newState).toMatchObject({
                ...prevState,
                teamsVector: newTeams
            });
        });     

        test('createTeam works fine', () => {
            const newTeam = {
                id: 10,
                name: "Test",
                logo: "logo-prueba",
                rank: 10,
                wins: 19,
                losses: 6,
                ties: 13,
                gamesplayed: 38,
                goalsfor: 54,
                goalsaganist: 34,
                points: 70
            };

            const newState = teamReducer(prevState, {
                type: ActionTypes.CREATE_TEAM,
                payload: newTeam
            });

            expect(newState).toMatchObject({
                ...prevState,
                teamsVector: [...prevState.teamsVector, newTeam]
            });
        });

        test('deleteTeam works fine', () => {
            const id = 1;

            const newState = teamReducer(prevState, {
                type: ActionTypes.DELETE_TEAM,
                payload: id
            });

            expect(newState).toMatchObject({
                ...prevState,
                teamsVector: [prevState.teamsVector[1]]
            });
        });
    });

});