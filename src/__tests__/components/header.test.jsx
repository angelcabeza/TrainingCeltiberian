import React from 'react'
import { render, screen,fireEvent } from '@testing-library/react'
import Header from '../../components/header/header'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router'

describe ('header', () => {
    test('Clicking on add team redirects to the right site', () => {
        const history = createMemoryHistory();

        render(
            <Router history={history}>
                <Header/>
            </Router>
        );

        //Test Header to have the name of the app, Add-Team functionality and the subtitle 
        const appName = screen.getByText('FootApp');
        const subtitle = screen.getByText('Stadistics & more')
        const addteam = screen.getByTestId("Add-Team")

        expect(appName).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
        expect(addteam).toBeInTheDocument();
    });

    test("Clicking on addTeam redirects to the right place", () => {
        const history = createMemoryHistory();

        render(
            <Router history={history}>
                <Header/>
            </Router>
        );

        const addteam = screen.queryByTestId("Add-Team");

        // Simulating a click on the Add-Team
        fireEvent.click(addteam);
        
        expect(history.length).toBe(2);
        expect(history.location.pathname).toBe('/add');
    });
});
