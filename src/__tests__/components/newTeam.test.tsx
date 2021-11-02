import { render } from '@testing-library/react'
import NewTeam from '../../components/newTeam/new-team.component'
import userEvent from '@testing-library/user-event'
import { newTeam } from '../../actions/types'


describe('newTeam', () => {
    const props = {
        handleSubmit: jest.fn((newteam: newTeam) => {
            newteam;
        }),
        name: 'Test',
        setName: jest.fn(),
        logo: 'url-test',
        setLogo: jest.fn(),
        rank: 5,
        setRank: jest.fn(),
        wins: 6,
        setWins: jest.fn(),
        losses: 7,
        setLoses: jest.fn(),
        ties: 8,
        setTies: jest.fn(),
        gamesplayed: 9,
        setGamesPlayed: jest.fn(),
        goalsfor: 10,
        setGoalsFor: jest.fn(),
        goalsaganist: 11,
        setGoalsAganist: jest.fn(),
        points: 12,
        setPoints: jest.fn()
    };

    let submit: HTMLElement;

    beforeAll( () => {
        const { getByRole } = render (
            <NewTeam
            handleSubmit={props.handleSubmit}
            name={props.name}
            setName={props.setName}
            rank={props.rank}
            setRank={props.setRank}
            logo={props.logo}
            setLogo={props.setLogo}
            wins={props.wins}
            setWins={props.setWins}
            losses={props.losses}
            setLoses={props.setLoses}
            ties={props.ties}
            setTies={props.setTies}
            gamesplayed={props.gamesplayed}
            setGamesPlayed={props.setGamesPlayed}
            goalsfor={props.goalsfor}
            setGoalsFor={props.setGoalsFor}
            goalsaganist={props.goalsaganist}
            setGoalsAganist={props.setGoalsAganist}
            points={props.points}
            setPoints={props.setPoints}
            />
        );

        submit = getByRole('button');
    });
    

    test("When you add a team it is added with the right values", () => {
        userEvent.click(submit);

        expect(props.handleSubmit).toBeCalledWith({
            name: 'Test',
            logo: 'url-test',
            rank: 5,
            wins: 6,
            losses: 7,
            ties: 8,
            gamesplayed: 9,
            goalsfor: 10,
            goalsaganist: 11,
            points: 12
        });
    });
});