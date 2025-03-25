import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Settings from './Settings'

describe('Settings', () => {
    test('renders Settings', () => {
        render(
            <MemoryRouter>
                <Settings />
            </MemoryRouter>);

        expect(screen.getByRole('settings')).toBeInTheDocument();
    });
});