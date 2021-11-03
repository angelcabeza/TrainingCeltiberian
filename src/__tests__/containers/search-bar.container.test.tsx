import { render,screen } from '@testing-library/react'
import SearchBarContainer from '../../containers/search-bar.container'
import userEvent from '@testing-library/user-event'

describe("SearchBarContainer", () => {
    const onSearchTeam = jest.fn( async (cadena: string) => {
        cadena;
    });

    beforeEach( () => {
        render (
            <SearchBarContainer
                onSearchTeam={onSearchTeam}
            />
        );
    });

    test ("Input field at start is empty", () => {
        const searchFrom = screen.queryByTestId("SearchForm");

        expect(searchFrom).toHaveFormValues({
            searchInput: ''
        });
    });

    test("Input field upgrades its content properly", () => {
        const inputField = screen.getByTestId("Input");

        userEvent.type(inputField,"Bar");

        expect(screen.queryByTestId("SearchForm")).toHaveFormValues({
            searchInput: 'Bar'
        });
    });

    test("When you submit to search, you search what you wrote", () => {
        const submit = screen.getByTestId("Button");
        userEvent.click(submit);

        expect(onSearchTeam).toHaveBeenCalledWith("");
    })
});