import { render,screen } from '@testing-library/react'
import TeamPreviewContainer from '../../containers/team-preview.container'
import userEvent from '@testing-library/user-event'
import {Team} from '../../actions/types'

describe("Team Preview", () => {

    const onDeleteTeam = jest.fn(async (id : number) => {
        id;
    });

    let team: Team;

    team = {
        id: 5,
        name: "prueba",
        logo: "logo-url",
        rank: 2,
        wins: 3,
        losses: 4,
        ties: 5,
        gamesplayed: 6,
        goalsfor: 7,
        goalsaganist: 8,
        points: 10
    }
    const teamsVector = [team];

    beforeEach( () => {
        render(
            <TeamPreviewContainer teams={teamsVector} onDelete={onDeleteTeam} />
        );
    })
    

    test("The team preview is showed properly", () => {
        const image = screen.getByTestId("Imagen");
        const nombre = screen.getByTestId("Nombre");
        const deleteButton = screen.getByTestId("DeleteButton");

        expect(image).toBeInTheDocument();
        expect(nombre).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
    });

    test("The delete button works as intended", () => {
        const deleteButton = screen.getByTestId("DeleteButton");
        userEvent.click(deleteButton);

        expect(onDeleteTeam).toBeCalledWith(5);
    })
});