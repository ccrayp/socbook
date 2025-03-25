import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {FriendsList, RequestsList} from './Friends'

const mockList = [{ id: '1', name: 'name', path: 'path' }]

describe('Friends', () => {
    test('renders FriendsList', () => {
        render(
            <MemoryRouter>
                <FriendsList friends={mockList}/>
            </MemoryRouter>);

        expect(screen.getByRole('friends')).toBeInTheDocument();
    });

    test('renders ReauestsList', () => {
        render(
            <MemoryRouter>
                <RequestsList requests={mockList} />
            </MemoryRouter>);

        expect(screen.getByRole('requests')).toBeInTheDocument();
    });
});