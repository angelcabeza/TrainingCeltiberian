import { render,screen } from '@testing-library/react'
import AddTeamContainer from '../../containers/new-team.container'
import userEvent from '@testing-library/user-event'
import { newTeam } from '../../actions/types'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe("NewTeamContainer", () => {
    const onAddTeam = jest.fn(async (team : newTeam) => {
        team;
    });

    const history = createMemoryHistory();

    beforeEach( () => {
        render (
            <Router history={history}>
                <AddTeamContainer onAddTeam={onAddTeam}/>
            </Router>   
        );
    });

    test("Default values are displayed correctly", () => {
        expect(screen.queryByTestId("form")).toHaveFormValues({
            nombre: '',
            rank: 0,
            wins: 0,
            logo: '',
            defeats: 0,
            draws: 0,
            gp: 0,
            gf: 0,
            ga: 0,
            points: 0,
        });
    });

    test("Adding a team updates fields state properly", () => {

        // We get every element of the view
        const nameInput = screen.getByTestId("nameInput");
        const winsInput = screen.getByTestId("winsInput");
        const defeatsInput = screen.getByTestId("defeatsInput");
        const drawsInput = screen.getByTestId("drawsInput");
        const gpInput = screen.getByTestId("gpInput");
        const gfInput = screen.getByTestId("gfInput");
        const gaInput = screen.getByTestId("gaInput");
        const pointsInput = screen.getByTestId("pointsInput");
        const rankInput = screen.getByTestId("rankInput");
        const logoInput = screen.getByTestId("logoInput");

        // We simulate all the inputs before the submit
        userEvent.type(nameInput,"Prueba");
        userEvent.type(winsInput, "1");
        userEvent.type(defeatsInput, "2");
        userEvent.type(drawsInput, "3");
        userEvent.type(gpInput,"4");
        userEvent.type(gfInput,"5");
        userEvent.type(gaInput, "6");
        userEvent.type(pointsInput, "7");
        userEvent.type(rankInput,"8");
        userEvent.type(logoInput,"logo-url");
        
        // We expect the fields to have the values we set before
        expect(screen.queryByTestId("form")).toHaveFormValues({
            nombre: 'Prueba',
            wins: 1,
            defeats: 2,
            draws: 3,
            gp: 4,
            gf: 5,
            ga: 6,
            points: 7,
            rank: 8,
            logo: "logo-url",
        });


    });

    test("Submit works as intended", () => {
        const submit = screen.queryByTestId("SubmitButton") as HTMLElement;
        userEvent.click(submit);

        expect(onAddTeam).toHaveBeenCalledWith({
            name: '',
            rank: 0,
            wins: 0,
            logo: '',
            losses: 0,
            ties: 0,
            gamesplayed: 0,
            goalsfor: 0,
            goalsaganist: 0,
            points: 0,
        })
    });
})