import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {FriendsButtons, RequestsButtons, ChatsButtons} from './ListItem'

describe('ListItem', () => {
    test('renders FriendsButtons', () => {
        render(
            <MemoryRouter>
                <FriendsButtons id="1" />
            </MemoryRouter>);

        expect(screen.getByRole('buttons')).toBeInTheDocument();
    });

    test('renders RequestsButtons', () => {
        render(
            <MemoryRouter>
                <RequestsButtons id='2'/>
            </MemoryRouter>);

        expect(screen.getByRole('buttons')).toBeInTheDocument();
    });

    test('renders FriendsButtons', () => {
        render(
            <MemoryRouter>
                <ChatsButtons id='3'/>
            </MemoryRouter>);

        expect(screen.getByRole('buttons')).toBeInTheDocument();
    });
});