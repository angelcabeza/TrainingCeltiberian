import React from 'react'
import { render, screen,fireEvent } from '@testing-library/react'
import SearchBarComponent from '../../components/searchBar/search-bar.component'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router'

describe ("Search Bar", () => {
    const props = {
        handleSubmit: jest.fn((cadena: string) => {
            cadena;
        }),
        value: 'Search-test',
        setValue: jest.fn()
    };

    let submit: HTMLElement;

    beforeAll( () => {
        const {getByRole} = render (
            <SearchBarComponent
                handleSubmit={props.handleSubmit}
                value={props.value}
                setValue={props.setValue}
            />
        );

        submit = getByRole('button');
    });

    test("When you search something, you are searching what you wrote", () => {
        userEvent.click(submit);

        expect(props.value).toEqual('Search-test');
    });
});