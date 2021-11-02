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
})