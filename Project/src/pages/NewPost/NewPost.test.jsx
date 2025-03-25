import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NewPost from './NewPost'

describe('NewPost', () => {
    test('renders NewPost', () => {
        render(
            <MemoryRouter>
                <NewPost />
            </MemoryRouter>);

        expect(screen.getByRole('new_post')).toBeInTheDocument();
    });
});