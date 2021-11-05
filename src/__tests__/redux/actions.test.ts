import http from '../../http-common'
import { getAllTeams, getTeamByName, deleteTeam, createTeam } from '../../actions/teamActions'
import { Team, newTeam, ActionTypes } from '../../actions/types'

jest.mock('../../http-common');
const mockHttp = http as jest.Mocked<typeof http>;

describe('Team Actions', () => {
    const dispatch = jest.fn();

    describe("Get all Teams", () => {
        it('Get all teams', async () => {
            const fetchedTeams: Team[] = [
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
            ];
            
            mockHttp.get.mockResolvedValueOnce({ data: fetchedTeams});
    
            await getAllTeams()(dispatch);
            expect(dispatch).toHaveBeenCalledWith({
                type: ActionTypes.GET_ALL_TEAMS,
                payload: fetchedTeams
            });
        });
    });

    describe("Delete Teams", () => {
        const id = 1;
        it ("Delete teams works properly", async () => {
            mockHttp.delete.mockResolvedValueOnce(id);

            await deleteTeam(id)(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: ActionTypes.DELETE_TEAM,
                payload: id
            });
        });
    });

    describe("Get team by name", () => {
        const search = "Real"

        it("SearchByName works properly", async () => {
            mockHttp.get.mockResolvedValueOnce(search);

            await getTeamByName(search)(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: ActionTypes.GET_TEAM_BY_NAME
            });
        });
    });

    describe('Create Team', () => {
        const newTeam: newTeam = {
            name: 'New Team',
            logo: "New team logo",
            rank: 2,
            wins: 25,
            losses: 6,
            ties: 7,
            gamesplayed: 38,
            goalsfor: 86,
            goalsaganist: 38,
            points: 82          
        };
    
        it('Creates the characters', async () => {
          mockHttp.post.mockResolvedValueOnce({ data: newTeam });
    
          await createTeam(newTeam)(dispatch);
    
          expect(dispatch).toHaveBeenLastCalledWith({
            type: ActionTypes.CREATE_TEAM,
            payload: newTeam
          });
        });
      });
});