import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Feed from './Feed'

describe('Feed', () => {
    test('renders Feed', () => {
        render(
            <MemoryRouter>
                <Feed />
            </MemoryRouter>);

        expect(screen.getByRole('feed')).toBeInTheDocument();
    });
});